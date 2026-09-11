# INNOVA Website

## Setup guides
Check the [setup-guides.md](setup-guides.md) file for more information.

## Setting branding configuration
As part of the branding mark, You have to update some data as logos, colors, fonts, etc. Following the next instructions will help you to do it without breakin anything:

1. Images

    You can start replacing the favicon image with the new one:
    - `public\favicon.ico`

    All Other branding images are located in `public/branding/` folder.

    ### Important
    * Remember keep using the same names convention for the files to avoid breaking the code: e.g:  `public\branding\isotipo-sm.png` and `public\branding\isotipo.webp`
    * All current and future images in the website should be rendered with `<SmartImg />` component, this requires to set all metadata as `alt`, `title`, `width`, `height`, etc. Also need to provide all image with main format `.webp`, and fallback formats as `.png`, `.jpeg`, etc, for the best performance and responsive design. Any image must be rendered with the native tag `<img />` or another component that wraps it.
    * **Note**: for the logo images, it is required to use `fallback="png"` to avoid breaking the code, as they are rendered in a specific way.
    ```vue
    <template>
        <SmartImg 
            src="/branding/isotipo" 
            alt="Logoisotipo Innova" 
            fallback="png" 
            ...
        />
    </template>
    ```
2. Colors
    * The colors are defined in `assets\css\main.css`, under the style rules for `@theme`:
    
    ```css
    @theme {
        ...
        --color-main-50: #B1E001;
        --color-main-100: #a2cd03;
        --color-main-200: #93ba05;
        --color-main-300: #84a80a;
        --color-main-400: #75960e;
        --color-main-500: #678413;
        --color-main-600: #5c7c22;
        --color-main-700: #527533;
        --color-main-800: #496d42;
        --color-main-900: #466c51;
        --color-main-950: #476C5E;

        --color-branding-50: #083643;
        --color-branding-100: #476C5E;
        --color-branding-200: #B8ECD7;
        --color-branding-300: #F2F2F2;
        --color-branding-400: #E9ECF5;
        --color-branding-500: #CEF09D;
        --color-branding-600: #B1E001;
        ...
    }
    ```
    > 🚩 **RECOMENDATION**: Do not add or remove any color from the current definition, just replace the current values with the new ones as you need. 
    
    > 🚩 **RECOMENDATION**: Do not replace the current values with random colors, all of these have been calculated for a reason. Instead, you can extract your branding colors from your logo using some specific tools like [Adobe Color](https://color.adobe.com/es/create/image), or some AI platform such as [ChatGPT](https://chatgpt.com/), [Gemini](https://gemini.google.com/app), etc, (Anyway, you should consider get support from an experienced designer).
    
    


    

