import os
import numpy as np
from PIL import Image, ImageFilter, ImageDraw, ImageEnhance

def generate_enhanced_logos():
    # Load original clean alpha
    src = Image.open('public/logo-clean-alpha.png')
    arr = np.array(src)
    H, W = arr.shape[:2]

    # Supersample factor for ultra-sharp vector-like rendering
    scale = 3
    large_w = W * scale
    large_h = H * scale

    # Upscale alpha with high quality
    alpha_img = Image.fromarray(arr[:, :, 3]).resize((large_w, large_h), Image.Resampling.LANCZOS)
    alpha_arr = np.array(alpha_img)

    # Threshold and smooth edges slightly to remove low-res pixelation
    smooth_alpha = Image.fromarray(alpha_arr).filter(ImageFilter.GaussianBlur(radius=1.2))
    smooth_arr = np.array(smooth_alpha)
    # Sigmoid contrast curve for razor-sharp edges
    sharp_alpha = np.clip((smooth_arr.astype(float) - 128) * 2.8 + 128, 0, 255).astype(np.uint8)

    # 1. Spire Mask (Y: 0 to 85*scale, X: 425*scale to 495*scale)
    spire_mask = np.zeros((large_h, large_w), dtype=bool)
    spire_y_end = int(85 * scale)
    spire_x_start = int(425 * scale)
    spire_x_end = int(495 * scale)
    spire_mask[0:spire_y_end, spire_x_start:spire_x_end] = sharp_alpha[0:spire_y_end, spire_x_start:spire_x_end] > 60

    # 2. Arbit Wordmark Mask (Y: 0 to 180*scale, excluding spire)
    arbit_mask = np.zeros((large_h, large_w), dtype=bool)
    arbit_y_end = int(180 * scale)
    arbit_mask[0:arbit_y_end, :] = (sharp_alpha[0:arbit_y_end, :] > 60) & (~spire_mask[0:arbit_y_end, :])

    # 3. INFRATEL Mask (Y: 180*scale to 240*scale)
    infratel_mask = np.zeros((large_h, large_w), dtype=bool)
    infratel_y_start = int(180 * scale)
    infratel_y_end = int(240 * scale)
    infratel_mask[infratel_y_start:infratel_y_end, :] = sharp_alpha[infratel_y_start:infratel_y_end, :] > 60

    # 4. Tagline Mask (Y: 240*scale to end)
    tagline_mask = np.zeros((large_h, large_w), dtype=bool)
    tagline_y_start = int(240 * scale)
    tagline_mask[tagline_y_start:, :] = sharp_alpha[tagline_y_start:, :] > 60

    print("Layer masks separated successfully.")

    # Function to create gradient
    def create_gradient_fill(mask, top_color, bottom_color, y_min, y_max):
        result = np.zeros((large_h, large_w, 4), dtype=np.uint8)
        y_indices, x_indices = np.where(mask)
        if len(y_indices) == 0:
            return result
        
        y_min_local = max(y_min, y_indices.min())
        y_max_local = min(y_max, y_indices.max())
        diff = max(1, y_max_local - y_min_local)

        for y, x in zip(y_indices, x_indices):
            t = np.clip((y - y_min_local) / diff, 0.0, 1.0)
            color = (1 - t) * np.array(top_color) + t * np.array(bottom_color)
            alpha_val = sharp_alpha[y, x]
            result[y, x] = [int(color[0]), int(color[1]), int(color[2]), alpha_val]
        return result

    # -------------------------------------------------------------
    # VARIANT 1: MODERNIZED LIGHT (Rich Azure Gradient + Glowing Gold Spire)
    # -------------------------------------------------------------
    light_logo = np.zeros((large_h, large_w, 4), dtype=np.uint8)

    # A. Arbit Wordmark: Premium Azure-to-Sapphire Gradient
    # Top: #38BDF8 (56, 189, 248) -> Middle: #2C8FEA (44, 143, 234) -> Bottom: #1A6FC4 (26, 111, 196)
    arbit_light = create_gradient_fill(arbit_mask, [56, 189, 248], [26, 111, 196], int(60*scale), int(179*scale))
    light_logo = np.maximum(light_logo, arbit_light)

    # B. Spire: Spectacular Dual-Tone Radiant Solar Gold Gradient
    # Base: Rich Imperial Amber (#D97706 / 217, 119, 6)
    # Mid: Warm Gold (#F59E0B / 245, 158, 11)
    # Apex: Solar Gold (#FDE047 / 253, 224, 71)
    y_spire, x_spire = np.where(spire_mask)
    s_ymin, s_ymax = y_spire.min(), y_spire.max()
    s_xmin, s_xmax = x_spire.min(), x_spire.max()
    s_xmid = (s_xmin + s_xmax) / 2

    spire_light = np.zeros((large_h, large_w, 4), dtype=np.uint8)
    for y, x in zip(y_spire, x_spire):
        t_y = np.clip((y - s_ymin) / max(1, s_ymax - s_ymin), 0.0, 1.0)
        # Vertical gradient: apex (low y) is bright solar gold, base (high y) is warm imperial gold
        base_color = (1 - t_y) * np.array([254, 240, 138]) + t_y * np.array([217, 119, 6])
        
        # Facet highlight: left facet slightly lighter, right facet richer amber
        if x < s_xmid:
            base_color = np.clip(base_color * 1.08, 0, 255)
        else:
            base_color = np.clip(base_color * 0.95, 0, 255)
            
        a = sharp_alpha[y, x]
        spire_light[y, x] = [int(base_color[0]), int(base_color[1]), int(base_color[2]), a]

    light_logo = np.maximum(light_logo, spire_light)

    # C. INFRATEL: Deep Slate Obsidian (#0F172A / 15, 23, 42) with razor crispness
    infratel_light = create_gradient_fill(infratel_mask, [15, 23, 42], [30, 41, 59], infratel_y_start, infratel_y_end)
    light_logo = np.maximum(light_logo, infratel_light)

    # D. Tagline: Deep Charcoal Slate (#334155 / 51, 65, 85)
    tagline_light = create_gradient_fill(tagline_mask, [51, 65, 85], [30, 41, 59], tagline_y_start, large_h)
    light_logo = np.maximum(light_logo, tagline_light)

    # -------------------------------------------------------------
    # VARIANT 2: MODERNIZED DARK (Titanium White + Glowing Gold Spire)
    # -------------------------------------------------------------
    dark_logo = np.zeros((large_h, large_w, 4), dtype=np.uint8)

    # A. Arbit Wordmark: Titanium White (#FFFFFF) with subtle cool silver luminance
    arbit_dark = create_gradient_fill(arbit_mask, [255, 255, 255], [240, 244, 248], int(60*scale), int(179*scale))
    dark_logo = np.maximum(dark_logo, arbit_dark)

    # B. Spire: Glowing Solar Gold (Same brilliant multi-facet)
    dark_logo = np.maximum(dark_logo, spire_light)

    # C. INFRATEL: Platinum White (#F8FAFC)
    infratel_dark = create_gradient_fill(infratel_mask, [248, 250, 252], [226, 232, 240], infratel_y_start, infratel_y_end)
    dark_logo = np.maximum(dark_logo, infratel_dark)

    # D. Tagline: Silver-Blue Accent (#94A3B8 / 148, 163, 184)
    tagline_dark = create_gradient_fill(tagline_mask, [148, 163, 184], [203, 213, 225], tagline_y_start, large_h)
    dark_logo = np.maximum(dark_logo, tagline_dark)

    # Crop to content
    def get_content_crop(logo_arr):
        alpha_channel = logo_arr[:, :, 3]
        y_idxs, x_idxs = np.where(alpha_channel > 20)
        padding = 8
        y1 = max(0, y_idxs.min() - padding)
        y2 = min(large_h, y_idxs.max() + padding)
        x1 = max(0, x_idxs.min() - padding)
        x2 = min(large_w, x_idxs.max() + padding)
        return logo_arr[y1:y2, x1:x2]

    # Save target images
    img_light = Image.fromarray(get_content_crop(light_logo))
    img_dark = Image.fromarray(get_content_crop(dark_logo))

    # Also save wordmark-only crop (arbit + spire + INFRATEL without bottom tagline) for compact navbar
    def get_wordmark_crop(logo_arr):
        # exclude tagline
        alpha_channel = logo_arr[:tagline_y_start, :, 3]
        y_idxs, x_idxs = np.where(alpha_channel > 20)
        padding = 8
        y1 = max(0, y_idxs.min() - padding)
        y2 = min(tagline_y_start, y_idxs.max() + padding)
        x1 = max(0, x_idxs.min() - padding)
        x2 = min(large_w, x_idxs.max() + padding)
        return logo_arr[y1:y2, x1:x2]

    img_wordmark_light = Image.fromarray(get_wordmark_crop(light_logo))
    img_wordmark_dark = Image.fromarray(get_wordmark_crop(dark_logo))

    # 1. Master transparent logo (Full with motto)
    img_light.save('public/arbit-logo-full.png', 'PNG')
    img_dark.save('public/arbit-logo-full-white.png', 'PNG')

    # 2. Main brand logo files used by BrandLogo.tsx
    # Resize to standard crisp dimensions (e.g. 700px wide for high DPI display)
    target_w = 640
    aspect = img_wordmark_light.height / img_wordmark_light.width
    target_h = int(target_w * aspect)

    res_light = img_wordmark_light.resize((target_w, target_h), Image.Resampling.LANCZOS)
    res_dark = img_wordmark_dark.resize((target_w, target_h), Image.Resampling.LANCZOS)

    res_light.save('public/arbit-logo-transparent.png', 'PNG')
    res_dark.save('public/arbit-logo-white.png', 'PNG')
    print(f"Saved remastered transparent & white logos: {target_w}x{target_h}")

    # 3. Create Modern Geometric Favicons
    # Modern obsidian rounded square with golden spire & azure dynamic A
    fav_size = 192
    fav = Image.new('RGBA', (fav_size, fav_size), (0, 0, 0, 0))
    fav_draw = ImageDraw.Draw(fav)

    # Rounded obsidian background
    fav_draw.rounded_rectangle([6, 6, fav_size - 6, fav_size - 6], radius=38, fill=(11, 19, 30, 255), outline=(44, 143, 234, 140), width=3)

    # Extract Spire and letter 'a' or crop from remastered logo
    spire_crop = Image.fromarray(spire_light[s_ymin:s_ymax, s_xmin:s_xmax])
    # Place spire inside favicon with beautiful proportions
    spire_scaled = spire_crop.resize((76, int(76 * spire_crop.height / spire_crop.width)), Image.Resampling.LANCZOS)
    
    # Place wordmark 'a'
    y_a, x_a = np.where(arbit_mask[:, 0:int(125*scale)])
    a_crop = Image.fromarray(arbit_light[y_a.min():y_a.max(), x_a.min():x_a.max()])
    a_scaled = a_crop.resize((68, int(68 * a_crop.height / a_crop.width)), Image.Resampling.LANCZOS)

    # Compose into favicon
    # Spire at top right
    fav.paste(spire_scaled, (98, 28), spire_scaled)
    # 'a' at center left
    fav.paste(a_scaled, (28, 64), a_scaled)

    # Save favicons
    fav.save('public/favicon-192.png', 'PNG')
    fav_64 = fav.resize((64, 64), Image.Resampling.LANCZOS)
    fav_64.save('public/favicon.png', 'PNG')
    fav_32 = fav.resize((32, 32), Image.Resampling.LANCZOS)
    fav_32.save('public/favicon.ico', format='ICO')
    print("Saved modernized favicons (192, 64, 32).")

if __name__ == '__main__':
    generate_enhanced_logos()

