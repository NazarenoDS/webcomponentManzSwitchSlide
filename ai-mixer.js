(() => {

    /* ─── LOGOS (SVG inline, data URI or simple letter mark) ─── */
    const LOGOS = {
      copilot: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
        <path d="M34.142 7.325A4.63 4.63 0 0029.7 4H28.35a4.63 4.63 0 00-4.554 3.794L21.48 20.407l.575-1.965a4.63 4.63 0 014.444-3.33h7.853l3.294 1.282 3.175-1.283h-.926a4.63 4.63 0 01-4.443-3.325l-1.31-4.461z" fill="url(#prefix__paint0_radial_56201_15503)"/>
        <path d="M14.33 40.656A4.63 4.63 0 0018.779 44h2.87a4.63 4.63 0 004.629-4.51l.312-12.163-.654 2.233a4.63 4.63 0 01-4.443 3.329h-7.919l-2.823-1.532-3.057 1.532h.912a4.63 4.63 0 014.447 3.344l1.279 4.423z" fill="url(#prefix__paint1_radial_56201_15503)"/>
        <path d="M29.5 4H13.46c-4.583 0-7.332 6.057-9.165 12.113C2.123 23.29-.72 32.885 7.503 32.885h6.925a4.63 4.63 0 004.456-3.358 2078.617 2078.617 0 014.971-17.156c.843-2.843 1.544-5.284 2.621-6.805C27.08 4.714 28.086 4 29.5 4z" fill="url(#prefix__paint2_linear_56201_15503)"/>
        <path d="M29.5 4H13.46c-4.583 0-7.332 6.057-9.165 12.113C2.123 23.29-.72 32.885 7.503 32.885h6.925a4.63 4.63 0 004.456-3.358 2078.617 2078.617 0 014.971-17.156c.843-2.843 1.544-5.284 2.621-6.805C27.08 4.714 28.086 4 29.5 4z" fill="url(#prefix__paint3_linear_56201_15503)"/>
        <path d="M18.498 44h16.04c4.582 0 7.332-6.058 9.165-12.115 2.171-7.177 5.013-16.775-3.208-16.775h-6.926a4.63 4.63 0 00-4.455 3.358 2084.036 2084.036 0 01-4.972 17.16c-.842 2.843-1.544 5.285-2.62 6.806-.604.852-1.61 1.566-3.024 1.566z" fill="url(#prefix__paint4_radial_56201_15503)"/><path d="M18.498 44h16.04c4.582 0 7.332-6.058 9.165-12.115 2.171-7.177 5.013-16.775-3.208-16.775h-6.926a4.63 4.63 0 00-4.455 3.358 2084.036 2084.036 0 01-4.972 17.16c-.842 2.843-1.544 5.285-2.62 6.806-.604.852-1.61 1.566-3.024 1.566z" fill="url(#prefix__paint5_linear_56201_15503)"/><defs><radialGradient id="prefix__paint0_radial_56201_15503" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-10.96051 -13.38922 12.59013 -10.30637 38.005 20.514)"><stop offset=".096" stop-color="#00AEFF"/><stop offset=".773" stop-color="#2253CE"/><stop offset="1" stop-color="#0736C4"/></radialGradient><radialGradient id="prefix__paint1_radial_56201_15503" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(51.84 -28.201 27.85) scale(15.9912 15.5119)"><stop stop-color="#FFB657"/><stop offset=".634" stop-color="#FF5F3D"/><stop offset=".923" stop-color="#C02B3C"/></radialGradient><radialGradient id="prefix__paint4_radial_56201_15503" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(109.274 16.301 20.802) scale(38.3873 45.9867)"><stop offset=".066" stop-color="#8C48FF"/>
        <stop offset=".5" stop-color="#F2598A"/><stop offset=".896" stop-color="#FFB152"/>
        </radialGradient><linearGradient id="prefix__paint2_linear_56201_15503" x1="12.5" y1="7.5" x2="14.788" y2="33.975" gradientUnits="userSpaceOnUse"><stop offset=".156" stop-color="#0D91E1"/><stop offset=".487" stop-color="#52B471"/><stop offset=".652" stop-color="#98BD42"/><stop offset=".937" stop-color="#FFC800"/></linearGradient>
        <linearGradient id="prefix__paint3_linear_56201_15503" x1="14.5" y1="4" x2="15.75" y2="32.885" gradientUnits="userSpaceOnUse">
        <stop stop-color="#3DCBFF"/><stop offset=".247" stop-color="#0588F7" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="prefix__paint5_linear_56201_15503" x1="42.586" y1="13.346" x2="42.569" y2="21.215" gradientUnits="userSpaceOnUse">
        <stop offset=".058" stop-color="#F8ADFA"/>
        <stop offset=".708" stop-color="#A86EDD" stop-opacity="0"/>
        </linearGradient>
        </defs>
      </svg>`,
    
      groq: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 492"><path fill-rule="evenodd" clip-rule="evenodd" d="M197.76 315.52l170.197-125.803c8.342-6.186 20.267-3.776 24.256 5.803 20.907 50.539 11.563 111.253-30.08 152.939-41.621 41.685-99.562 50.816-152.512 29.994l-57.834 26.816c82.965 56.768 183.701 42.731 246.656-20.33 49.941-50.006 65.408-118.166 50.944-179.627l.128.149c-20.971-90.282 5.162-126.378 58.666-200.17 1.28-1.75 2.56-3.499 3.819-5.291l-70.421 70.507v-.214l-243.883 245.27m-35.072 30.528c-59.563-56.96-49.28-145.088 1.515-195.926 37.568-37.61 99.136-52.97 152.874-30.4l57.707-26.666a166.554 166.554 0 00-39.019-21.334 191.467 191.467 0 00-208.042 41.942c-54.038 54.101-71.04 137.301-41.856 208.298 21.802 53.056-13.931 90.582-49.92 128.47C23.104 463.915 10.304 477.333 0 491.541l162.56-145.386" fill="#000"/></svg>`,
    
      mistral: `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><g transform="translate(6 79.299) scale(1.96335)"><clipPath id="prefix__a"><path d="M0 0h254.667v180H0z"/></clipPath><g clip-path="url(#prefix__a)"><g transform="scale(1.33333)"><clipPath id="prefix__b"><path d="M0 0h190.141v135H0z"/></clipPath><g clip-path="url(#prefix__b)" fill-rule="nonzero"><path fill="#ffd800" d="M27.153 0h27.169v27.089H27.153zM135.815 0h27.169v27.089h-27.169z"/><path fill="#ffaf00" d="M27.153 27.091h54.329V54.18H27.153zM108.661 27.091h54.329V54.18h-54.329z"/><path fill="#ff8205" d="M27.153 54.168h135.819v27.089H27.153z"/><path fill="#fa500f" d="M27.153 81.259h27.169v27.09H27.153zM81.492 81.259h27.169v27.09H81.492zM135.815 81.259h27.169v27.09h-27.169z"/><path fill="#e10500" d="M-.001 108.339h81.489v27.09H-.001zM108.661 108.339h81.498v27.09h-81.498z"/></g></g></g></g></svg>`,
    
      deepseek: `<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 509.64">
      <path fill="#fff" d="M115.612 0h280.775C459.974 0 512 52.026 512 115.612v278.415c0 63.587-52.026 115.613-115.613 115.613H115.612C52.026 509.64 0 457.614 0 394.027V115.612C0 52.026 52.026 0 115.612 0z"/>
      <path fill="#4D6BFE" fill-rule="nonzero" d="M440.898 139.167c-4.001-1.961-5.723 1.776-8.062 3.673-.801.612-1.479 1.407-2.154 2.141-5.848 6.246-12.681 10.349-21.607 9.859-13.048-.734-24.192 3.368-34.04 13.348-2.093-12.307-9.048-19.658-19.635-24.37-5.54-2.449-11.141-4.9-15.02-10.227-2.708-3.795-3.447-8.021-4.801-12.185-.861-2.509-1.725-5.082-4.618-5.512-3.139-.49-4.372 2.142-5.601 4.349-4.925 9.002-6.833 18.921-6.647 28.962.432 22.597 9.972 40.597 28.932 53.397 2.154 1.47 2.707 2.939 2.032 5.082-1.293 4.41-2.832 8.695-4.186 13.105-.862 2.817-2.157 3.429-5.172 2.205-10.402-4.346-19.391-10.778-27.332-18.553-13.481-13.044-25.668-27.434-40.873-38.702a177.614 177.614 0 00-10.834-7.409c-15.512-15.063 2.032-27.434 6.094-28.902 4.247-1.532 1.478-6.797-12.251-6.736-13.727.061-26.285 4.653-42.288 10.777-2.34.92-4.801 1.593-7.326 2.142-14.527-2.756-29.608-3.368-45.367-1.593-29.671 3.305-53.368 17.329-70.788 41.272-20.928 28.785-25.854 61.482-19.821 95.59 6.34 35.943 24.683 65.704 52.876 88.974 29.239 24.123 62.911 35.943 101.32 33.677 23.329-1.346 49.307-4.468 78.607-29.27 7.387 3.673 15.142 5.144 28.008 6.246 9.911.92 19.452-.49 26.839-2.019 11.573-2.449 10.773-13.166 6.586-15.124-33.915-15.797-26.47-9.368-33.24-14.573 17.235-20.39 43.213-41.577 53.369-110.222.8-5.448.121-8.877 0-13.287-.061-2.692.553-3.734 3.632-4.041 8.494-.981 16.742-3.305 24.314-7.471 21.975-12.002 30.84-31.719 32.933-55.355.307-3.612-.061-7.348-3.879-9.245v-.003zM249.4 351.89c-32.872-25.838-48.814-34.352-55.4-33.984-6.155.368-5.048 7.41-3.694 12.002 1.415 4.532 3.264 7.654 5.848 11.634 1.785 2.634 3.017 6.551-1.784 9.493-10.587 6.55-28.993-2.205-29.856-2.635-21.421-12.614-39.334-29.269-51.954-52.047-12.187-21.924-19.267-45.435-20.435-70.542-.308-6.061 1.478-8.207 7.509-9.307 7.94-1.471 16.127-1.778 24.068-.615 33.547 4.9 62.108 19.902 86.054 43.66 13.666 13.531 24.007 29.699 34.658 45.496 11.326 16.778 23.514 32.761 39.026 45.865 5.479 4.592 9.848 8.083 14.035 10.656-12.62 1.407-33.673 1.714-48.075-9.676zm15.899-102.519c.521-2.111 2.421-3.658 4.722-3.658a4.74 4.74 0 011.661.305c.678.246 1.293.614 1.786 1.163.861.859 1.354 2.083 1.354 3.368 0 2.695-2.154 4.837-4.862 4.837a4.748 4.748 0 01-4.738-4.034 5.01 5.01 0 01.077-1.981zm47.208 26.915c-2.606.996-5.2 1.778-7.707 1.88-4.679.244-9.787-1.654-12.556-3.981-4.308-3.612-7.386-5.631-8.679-11.941-.554-2.695-.247-6.858.246-9.246 1.108-5.144-.124-8.451-3.754-11.451-2.954-2.449-6.711-3.122-10.834-3.122-1.539 0-2.954-.673-4.001-1.224-1.724-.856-3.139-3-1.785-5.634.432-.856 2.525-2.939 3.018-3.305 5.6-3.185 12.065-2.144 18.034.244 5.54 2.266 9.727 6.429 15.759 12.307 6.155 7.102 7.263 9.063 10.773 14.39 2.771 4.163 5.294 8.451 7.018 13.348.877 2.561.071 4.74-2.341 6.277-.981.625-2.109 1.044-3.191 1.458z"/>
      </svg>`,
    
      claude: `<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 509.64"><path fill="#D77655" d="M115.612 0h280.775C459.974 0 512 52.026 512 115.612v278.415c0 63.587-52.026 115.612-115.613 115.612H115.612C52.026 509.639 0 457.614 0 394.027V115.612C0 52.026 52.026 0 115.612 0z"/><path fill="#FCF2EE" fill-rule="nonzero" d="M142.27 316.619l73.655-41.326 1.238-3.589-1.238-1.996-3.589-.001-12.31-.759-42.084-1.138-36.498-1.516-35.361-1.896-8.897-1.895-8.34-10.995.859-5.484 7.482-5.03 10.717.935 23.683 1.617 35.537 2.452 25.782 1.517 38.193 3.968h6.064l.86-2.451-2.073-1.517-1.618-1.517-36.776-24.922-39.81-26.338-20.852-15.166-11.273-7.683-5.687-7.204-2.451-15.721 10.237-11.273 13.75.935 3.513.936 13.928 10.716 29.749 23.027 38.848 28.612 5.687 4.727 2.275-1.617.278-1.138-2.553-4.271-21.13-38.193-22.546-38.848-10.035-16.101-2.654-9.655c-.935-3.968-1.617-7.304-1.617-11.374l11.652-15.823 6.445-2.073 15.545 2.073 6.547 5.687 9.655 22.092 15.646 34.78 24.265 47.291 7.103 14.028 3.791 12.992 1.416 3.968 2.449-.001v-2.275l1.997-26.641 3.69-32.707 3.589-42.084 1.239-11.854 5.863-14.206 11.652-7.683 9.099 4.348 7.482 10.716-1.036 6.926-4.449 28.915-8.72 45.294-5.687 30.331h3.313l3.792-3.791 15.342-20.372 25.782-32.227 11.374-12.789 13.27-14.129 8.517-6.724 16.1-.001 11.854 17.617-5.307 18.199-16.581 21.029-13.75 17.819-19.716 26.54-12.309 21.231 1.138 1.694 2.932-.278 44.536-9.479 24.062-4.347 28.714-4.928 12.992 6.066 1.416 6.167-5.106 12.613-30.71 7.583-36.018 7.204-53.636 12.689-.657.48.758.935 24.164 2.275 10.337.556h25.301l47.114 3.514 12.309 8.139 7.381 9.959-1.238 7.583-18.957 9.655-25.579-6.066-59.702-14.205-20.474-5.106-2.83-.001v1.694l17.061 16.682 31.266 28.233 39.152 36.397 1.997 8.999-5.03 7.102-5.307-.758-34.401-25.883-13.27-11.651-30.053-25.302-1.996-.001v2.654l6.926 10.136 36.574 54.975 1.895 16.859-2.653 5.485-9.479 3.311-10.414-1.895-21.408-30.054-22.092-33.844-17.819-30.331-2.173 1.238-10.515 113.261-4.929 5.788-11.374 4.348-9.478-7.204-5.03-11.652 5.03-23.027 6.066-30.052 4.928-23.886 4.449-29.674 2.654-9.858-.177-.657-2.173.278-22.37 30.71-34.021 45.977-26.919 28.815-6.445 2.553-11.173-5.789 1.037-10.337 6.243-9.2 37.257-47.392 22.47-29.371 14.508-16.961-.101-2.451h-.859l-98.954 64.251-17.618 2.275-7.583-7.103.936-11.652 3.589-3.791 29.749-20.474-.101.102.024.101z"/></svg>`,
    
      gpt: `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M474.123 209.81c11.525-34.577 7.569-72.423-10.838-103.904-27.696-48.168-83.433-72.94-137.794-61.414a127.14 127.14 0 00-95.475-42.49c-55.564 0-104.936 35.781-122.139 88.593-35.781 7.397-66.574 29.76-84.637 61.414-27.868 48.167-21.503 108.72 15.826 150.007-11.525 34.578-7.569 72.424 10.838 103.733 27.696 48.34 83.433 73.111 137.966 61.585 24.084 27.18 58.833 42.835 95.303 42.663 55.564 0 104.936-35.782 122.139-88.594 35.782-7.397 66.574-29.76 84.465-61.413 28.04-48.168 21.676-108.722-15.654-150.008v-.172zm-39.567-87.218c11.01 19.267 15.139 41.803 11.354 63.65-.688-.516-2.064-1.204-2.924-1.72l-101.152-58.49a16.965 16.965 0 00-16.687 0L206.621 194.5v-50.232l97.883-56.597c45.587-26.32 103.732-10.666 130.052 34.921zm-227.935 104.42l49.888-28.9 49.887 28.9v57.63l-49.887 28.9-49.888-28.9v-57.63zm23.223-191.81c22.364 0 43.867 7.742 61.07 22.02-.688.344-2.064 1.204-3.097 1.72L186.666 117.26c-5.161 2.925-8.258 8.43-8.258 14.45v136.934l-43.523-25.116V130.333c0-52.64 42.491-95.13 95.131-95.302l-.172.172zM52.14 168.697c11.182-19.268 28.557-34.062 49.544-41.803V247.14c0 6.02 3.097 11.354 8.258 14.45l118.354 68.295-43.695 25.288-97.711-56.425c-45.415-26.32-61.07-84.465-34.75-130.052zm26.665 220.71c-11.182-19.095-15.139-41.802-11.354-63.65.688.516 2.064 1.204 2.924 1.72l101.152 58.49a16.965 16.965 0 0016.687 0l118.354-68.467v50.232l-97.883 56.425c-45.587 26.148-103.732 10.665-130.052-34.75h.172zm204.54 87.39c-22.192 0-43.867-7.741-60.898-22.02a62.439 62.439 0 003.097-1.72l101.152-58.317c5.16-2.924 8.429-8.43 8.257-14.45V243.527l43.523 25.116v113.022c0 52.64-42.663 95.303-95.131 95.303v-.172zM461.22 343.303c-11.182 19.267-28.729 34.061-49.544 41.63V264.687c0-6.021-3.097-11.526-8.257-14.45L284.893 181.77l43.523-25.116 97.883 56.424c45.587 26.32 61.07 84.466 34.75 130.053l.172.172z" fill-rule="nonzero"/></svg>`,
    
      kimi: `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M503 114.333v280c0 60.711-49.29 110-110 110H113c-60.711 0-110-49.289-110-110v-280c0-60.71 49.289-110 110-110h280c60.71 0 110 49.29 110 110z"/><path d="M342.065 189.759c1.886-2.42 3.541-4.63 5.289-6.77.81-1.007.74-1.771-.046-2.824-7.58-9.965-8.298-21.028-3.935-32.254 3.275-8.448 10.52-12.406 19.373-13.25 5.52-.521 10.936.046 15.959 2.73 6.596 3.53 10.438 8.912 11.688 16.341.995 5.926.81 11.712-.868 17.452-2.974 10.161-10.277 15.427-20.287 16.758-8.31 1.11-16.734 1.25-25.113 1.817-.648.046-1.308 0-2.06 0z" fill="#027aff"/><path d="M321.512 144.254h-50.064l-39.637 90.384h-56.036v-89.99H131v232.868h44.787v-98.103h78.973c13.598 0 26.015-7.927 31.744-20.252v118.355h44.787v-98.103c0-23.342-18.239-42.97-41.523-44.671v-.116h-24.593a45.577 45.577 0 0026.884-24.534l29.453-65.838z" fill="#fff"/></svg>`,
    
      ollama: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill-rule="evenodd" clip-rule="evenodd" d="M168.64 23.253c4.608 1.814 8.768 4.8 12.544 8.747 6.293 6.528 11.605 15.872 15.659 26.944 4.074 11.136 6.72 23.467 7.722 35.84a107.824 107.824 0 0143.712-13.568l1.088-.085c18.56-1.494 36.907 1.856 52.907 10.112a103.091 103.091 0 016.336 3.626c1.067-12.138 3.669-24.192 7.68-35.072 4.053-11.093 9.365-20.416 15.637-26.965a35.628 35.628 0 0112.566-8.747c5.482-2.133 11.306-2.517 16.981-.896 8.555 2.432 15.893 7.851 21.675 15.723 5.29 7.19 9.258 16.405 11.968 27.456 4.906 19.925 5.76 46.144 2.453 77.76l1.131.853.554.406c16.15 12.288 27.392 29.802 33.344 50.133 9.28 31.723 4.608 67.307-11.392 87.211l-.384.448.043.064c8.896 16.256 14.293 33.429 15.445 51.2l.043.64c1.365 22.72-4.267 45.589-17.365 68.053l-.15.213.214.512c10.069 24.683 13.226 49.536 9.344 74.368l-.128.832a13.888 13.888 0 01-15.936 11.435 13.83 13.83 0 01-11.31-10.43 13.828 13.828 0 01-.21-5.399c3.562-22.038.213-44.139-10.24-66.624a13.713 13.713 0 01.853-13.163l.085-.128c12.886-19.712 18.219-39.04 17.067-58.027-.981-16.618-6.933-32.938-17.067-48.49a13.737 13.737 0 013.84-18.902l.192-.128c5.184-3.392 9.963-12.053 12.374-23.893a90.218 90.218 0 00-2.027-42.112c-4.373-14.933-12.373-27.392-23.573-35.904-12.694-9.685-29.504-14.357-50.774-13.013a13.93 13.93 0 01-13.482-7.915c-6.699-14.187-16.47-24.341-28.651-30.635a70.145 70.145 0 00-37.803-7.082c-26.56 2.112-49.984 17.088-56.96 35.968a13.91 13.91 0 01-13.013 9.066c-22.763.043-40.384 5.376-53.269 14.998-11.136 8.32-18.731 19.946-22.742 33.877a86.824 86.824 0 00-1.45 40.235c2.389 11.904 7.061 21.76 12.416 27.072l.17.149c4.523 4.416 5.483 11.307 2.326 16.747-7.68 13.269-13.419 33.045-14.358 52.053-1.066 21.717 3.968 40.576 15.339 54.101l.341.406a13.711 13.711 0 012.027 14.72c-12.288 26.368-16.064 48.042-11.989 65.109a13.91 13.91 0 01-27.072 6.357c-5.184-21.717-1.664-46.592 10.09-74.624l.299-.746-.17-.256a92.574 92.574 0 01-12.758-27.926l-.107-.405a122.965 122.965 0 01-3.776-38.08c.939-19.413 5.931-39.296 13.27-55.253l.256-.555-.043-.043c-6.25-8.917-10.88-20.33-13.44-32.96l-.107-.512a114.176 114.176 0 011.984-53.12c5.59-19.52 16.576-36.288 32.768-48.405 1.28-.96 2.624-1.92 3.968-2.816-3.392-31.851-2.538-58.24 2.39-78.293 2.709-11.051 6.698-20.267 11.989-27.456 5.76-7.851 13.099-13.27 21.653-15.723 5.675-1.621 11.52-1.259 17.003.896v.021zm87.808 193.92c19.968 0 38.4 6.678 52.181 18.24 13.44 11.243 21.44 26.347 21.44 41.387 0 18.944-8.661 33.707-24.17 43.136-13.227 8-30.955 11.883-51.264 11.883-21.526 0-39.915-5.526-53.184-15.659-13.163-10.027-20.544-24.107-20.544-39.36 0-15.083 8.49-30.229 22.528-41.515 14.25-11.456 33.066-18.112 53.013-18.112zm0 19.115a65.498 65.498 0 00-40.875 13.867c-9.834 7.893-15.402 17.813-15.402 26.666 0 9.131 4.48 17.686 13.013 24.192 9.707 7.403 23.979 11.691 41.451 11.691 17.045 0 31.424-3.136 41.216-9.088 9.877-5.973 14.933-14.635 14.933-26.816 0-9.024-5.248-18.987-14.571-26.795-10.325-8.64-24.32-13.717-39.765-13.717zm14.123 25.813l.085.086a7.431 7.431 0 01-1.195 10.453l-6.229 4.907v9.514a7.999 7.999 0 01-8.021 7.958 8.004 8.004 0 01-8.022-7.958v-9.813l-5.781-4.651a7.4 7.4 0 01-1.109-10.453 7.53 7.53 0 0110.538-1.088l4.587 3.669 4.693-3.712a7.533 7.533 0 0110.454 1.088zm-107.52-40.938c10.197 0 18.496 8.32 18.496 18.581a18.564 18.564 0 01-18.518 18.581 18.559 18.559 0 01-18.496-18.56 18.565 18.565 0 015.399-13.129 18.609 18.609 0 0113.119-5.473zm185.728 0c10.24 0 18.517 8.32 18.517 18.581a18.559 18.559 0 01-18.517 18.581 18.56 18.56 0 01-18.496-18.56 18.56 18.56 0 0118.496-18.602zM158.72 49.067l-.064.042a14.06 14.06 0 00-6.08 5.078l-.107.128c-2.944 4.032-5.504 9.962-7.424 17.749-3.626 14.763-4.608 34.795-2.645 59.349 9.173-2.73 19.179-4.437 29.952-5.056l.213-.021.406-.725a69.41 69.41 0 013.157-5.099c2.624-16.448.469-36.096-5.397-52.139-2.859-7.765-6.336-13.866-9.664-17.344a13.403 13.403 0 00-2.283-1.92l-.064-.042zm195.712.853l-.043.021a13.396 13.396 0 00-2.282 1.92c-3.328 3.478-6.827 9.6-9.664 17.366-6.187 16.938-8.256 37.888-4.907 54.869l1.237 2.069.171.299h.64a110.599 110.599 0 0131.275 4.523c1.834-23.979.81-43.584-2.731-58.07-1.92-7.786-4.48-13.717-7.445-17.749l-.086-.128a14.054 14.054 0 00-6.08-5.099h-.085v-.021z" fill="#000"/>
      </svg>`,
      
      opencode: `<svg width='240' height='300' viewBox='0 0 240 300' fill='none' xmlns='http://www.w3.org/2000/svg'><g clip-path='url(#clip0_1401_86274)'><mask id='mask0_1401_86274' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='0' y='0' width='240' height='300'><path d='M240 0H0V300H240V0Z' fill='white'/></mask><g mask='url(#mask0_1401_86274)'><path d='M180 240H60V120H180V240Z' fill='#CFCECD'/><path d='M180 60H60V240H180V60ZM240 300H0V0H240V300Z' fill='#211E1E'/></g></g><defs><clipPath id='clip0_1401_86274'><rect width='240' height='300' fill='white'/></clipPath></defs></svg>`,

      qwen: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M268.885 28.587a9886.443 9886.443 0 0125.046 44.266 3.833 3.833 0 003.349 1.942h118.443c3.712 0 6.869 2.346 9.514 6.976l31.019 54.826c4.053 7.19 5.12 10.198.512 17.856a1129.453 1129.453 0 00-16.213 27.734l-7.83 14.037c-2.261 4.181-4.757 5.973-.853 10.923l56.576 98.922c3.669 6.422 2.368 10.539-.917 16.427a2813.646 2813.646 0 01-28.48 49.92c-3.392 5.803-7.51 8-14.507 7.893a916.763 916.763 0 00-49.643.342 2.12 2.12 0 00-1.728 1.066 12257.343 12257.343 0 01-57.706 101.12c-3.606 6.251-8.107 7.744-15.467 7.766-21.269.064-42.709.085-64.363.042a11.45 11.45 0 01-9.92-5.781l-28.48-49.557a1.919 1.919 0 00-1.77-1.046H106.283c-6.08.64-11.798-.021-17.174-1.962l-34.197-59.094a11.58 11.58 0 01-.043-11.52l25.75-45.226a4.225 4.225 0 000-4.203 11754.482 11754.482 0 01-40-69.803l-16.854-29.76c-3.413-6.613-3.69-10.581 2.027-20.586 9.92-17.344 19.776-34.667 29.59-51.968 2.815-4.992 6.485-7.126 12.458-7.147 18.41-.078 36.821-.085 55.232-.021a2.651 2.651 0 002.283-1.344L185.216 27.2a10.412 10.412 0 019.003-5.248c11.178-.021 22.464 0 33.77-.128l21.696-.49c7.275-.065 15.446.682 19.2 7.253zm-73.216 8.597a1.281 1.281 0 00-1.109.64l-61.141 106.987a3.347 3.347 0 01-2.88 1.664H69.397c-1.194 0-1.493.533-.874 1.578l123.946 216.662c.534.896.278 1.322-.725 1.344l-59.627.32a4.647 4.647 0 00-4.266 2.474l-28.16 49.28c-.939 1.664-.448 2.518 1.45 2.518l121.942.17c.981 0 1.706.427 2.218 1.302l29.931 52.352c.981 1.728 1.963 1.749 2.965 0l106.795-186.88 16.704-29.483a1.169 1.169 0 011.024-.601 1.17 1.17 0 011.024.601l30.379 53.973a2.599 2.599 0 002.282 1.323l58.944-.427a.846.846 0 00.858-.853.877.877 0 00-.111-.427L414.229 203.2a2.31 2.31 0 010-2.411l6.251-10.816 23.893-42.176c.512-.874.256-1.322-.746-1.322h-247.36c-1.259 0-1.558-.555-.918-1.643l30.592-53.44a2.276 2.276 0 000-2.432L196.8 37.845a1.276 1.276 0 00-1.131-.661zm134.187 171.093c.981 0 1.237.427.725 1.28l-17.749 31.254-55.744 97.813a1.199 1.199 0 01-1.067.619 1.242 1.242 0 01-1.066-.619l-73.664-128.683c-.427-.725-.214-1.109.597-1.152l4.608-.256 143.403-.256h-.043z" fill="url(#prefix__paint0_linear_9_19)"/><defs><linearGradient id="prefix__paint0_linear_9_19" x1="21.323" y1="21.33" x2="46955.3" y2="21.33" gradientUnits="userSpaceOnUse"><stop stop-color="#6336E7" stop-opacity=".84"/><stop offset="1" stop-color="#6F69F7" stop-opacity=".84"/></linearGradient></defs></svg>`,
      
      glm: `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M9.917 2c4.906 0 10.178 3.947 8.93 10.58-.014.07-.037.14-.057.21l-.003-.277c-.083-3-1.534-8.934-8.87-8.934-3.393 0-8.137 3.054-7.93 8.158-.04 4.778 3.555 8.4 7.95 8.332l.073-.001c1.2-.033 2.763-.429 3.1-1.657.063-.031.26.534.268.598.048.256.112.369.192.34.981-.348 2.286-1.222 1.952-2.38-.176-.61-1.775-.147-1.921-.347.418-.979 2.234-.926 3.153-.716.443.102.657.38 1.012.442.29.052.981-.2.96.242-1.5 3.042-4.893 5.41-8.808 5.41C3.654 22 0 16.574 0 11.737 0 5.947 4.959 2 9.917 2zM9.9 5.3c.484 0 1.125.225 1.38.585 3.669.145 4.313 2.686 4.694 5.444.255 1.838.315 2.3.182 1.387l.083.59c.068.448.554.737.982.516.144-.075.254-.231.328-.47a.2.2 0 01.258-.13l.625.22a.2.2 0 01.124.238c-.092.344-.267.66-.51.92-.878.917-2.757.664-3.08-.62-.14-.554-.055-.626-.345-1.242-.292-.621-1.238-.709-1.69-.295-.345.315-.407.805-.406 1.282L12.6 15.9c0 .494-.406.9-.9.9h-1.4a.904.904 0 01-.9-.9v-.65c0-.631-.519-1.15-1.15-1.15-.631 0-1.15.519-1.15 1.15v.65c0 .494-.406.9-.9.9H4.8a.904.904 0 01-.9-.9l.035-3.239c.012-1.884.356-3.658 2.47-4.134.2-.045.252.13.29.342.025.154.043.252.053.294.701 3.058 1.75 4.299 3.144 3.722l.66-.331.254-.13c.158-.082.25-.131.276-.15.012-.01-.165-.206-.407-.464l-1.012-1.067a8.074 8.074 0 01-.199-.216c-.047-.034-.116.068-.208.306-.074.157-.251.252-.272.326-.013.058.108.298.362.72.164.288.22.508-.31.343-1.04-.8-1.518-2.273-1.684-3.725-.004-.035-.162-1.913-.162-1.913a1.205 1.205 0 011.113-1.281L9.9 5.3zm12.994 8.68c.037.697-.403.704-1.213.591l-1.783-.276c-.265-.053-.385-.099-.313-.147.47-.315 3.268-.93 3.31-.168h-.001zm-.915-.083l-.926.042c-.85.077-1.452.24.338.336l.103.003c.815.012 1.264-.359.485-.381zm1.667-3.601h.01c.79.398.067 1.03-.65 1.393-.14.07-.491.176-1.052.315-.241.04-.457.092-.333.16l.01.005c1.952.958-3.123 1.534-2.495 1.285l.38-.148c.68-.266 1.614-.682 1.666-1.337.038-.48 1.253-.442 1.493-.968.048-.106 0-.236-.144-.389-.05-.047-.094-.094-.107-.148-.073-.305.7-.431 1.222-.168zm-2.568-.474c-.135 1.198-2.479 4.192-1.949 2.863l.017-.042c.298-.717.376-2.221 1.337-3.221.25-.26.636.035.595.4zm-7.976-.253c.02-.694 1.002-.968 1.346-.347.01-1.274-1.941-.768-1.346.347z" fill="url(#prefix___Linear1)" transform="translate(6 5.997) scale(20.8335)"/><defs><linearGradient id="prefix___Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="scale(23.0665) rotate(21.129 -1.478 -.266)"><stop offset="0" stop-color="#504af4"/><stop offset="1" stop-color="#3485ff"/></linearGradient></defs></svg>`,
      
      claude_mcp: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 600 600"><path fill="#D97757" fill-rule="evenodd" d="M525 273.7h75v77.6h-75V427h-37.2v73H450v-73h-37.2v73H375v-73H225v73h-37.8v-73H150v73h-37.8v-73H75v-75.7H0v-77.6h75V125h450zm-375 0h37.2v-71.1H150zm262.8 0H450v-71.1h-37.2z" clip-rule="evenodd"/></svg>`
    };
    
    const AIS = [
      {
        id:'copilot', name:'Copilot', sub:'Microsoft · GitHub',
        baseQuality:52,
        desc:'Integración profunda con Microsoft 365 y GitHub. Ideal para tareas cotidianas sin costo extra y disponible en casi cualquier entorno.',
        tags:['gratuito','Microsoft 365','GitHub'],
        link:'https://copilot.microsoft.com',
        scores:{costo:1,velocidad:0,razon:1,tools:2,hardware:0}
      },
      {
        id:'groq', name:'Groq', sub:'Groq Cloud · Xai',
        baseQuality:64,
        desc:'Hardware LPU diseñado para inferencia ultrarrápida. La IA más veloz disponible en nube, corriendo Llama 3 de Meta.',
        tags:['ultrarrápido','LPU','open source'],
        link:'https://groq.com',
        scores:{costo:0,velocidad:2,razon:1,tools:0,hardware:0}
      },
      {
        id:'mistral', name:'Mistral', sub:'Mistral AI · Francia',
        baseQuality:58,
        desc:'Modelos europeos eficientes y open weight. Buena relación calidad/precio con enfoque en privacidad y soberanía de datos.',
        tags:['europeo','open weight','privacidad'],
        link:'https://mistral.ai',
        scores:{costo:0,velocidad:1,razon:1,tools:1,hardware:2}
      },
      {
        id:'deepseek', name:'DeepSeek', sub:'DeepSeek AI · China',
        baseQuality:85,
        desc:'Razonamiento comparable a los líderes a fracción del costo. Contexto masivo, open source y con resultados sorprendentes en benchmarks.',
        tags:['económico','razonamiento','R1'],
        link:'https://deepseek.com',
        scores:{costo:1,velocidad:2,razon:2,tools:1,hardware:1}
      },
      {
        id:'claude', name:'Claude', sub:'Anthropic',
        baseQuality:87,
        desc:'Razonamiento profundo con 200k de contexto. El mejor para tareas que requieren pensar con cuidado y coherencia a lo largo de conversaciones largas.',
        tags:['razonamiento','contexto 200k','análisis'],
        link:'https://claude.ai',
        scores:{costo:2,velocidad:1,razon:2,tools:1,hardware:0}
      },
      {
        id:'gpt', name:'GPT', sub:'OpenAI',
        baseQuality:84,
        desc:'El ecosistema de herramientas más maduro. GPTs, plugins, DALL-E, visión y voz integrados en una sola plataforma consolidada.',
        tags:['herramientas','visión','plugins'],
        link:'https://openai.com',
        scores:{costo:2,velocidad:1,razon:2,tools:2,hardware:0}
      },
      {
        id:'kimi', name:'Kimi', sub:'Moonshot AI',
        baseQuality:65,
        desc:'Contexto de 1M tokens y agentes autónomos. Ideal para documentos enormes y flujos de trabajo agentic en nicho asiático.',
        tags:['1M tokens','agentes','nicho'],
        link:'https://kimi.ai',
        scores:{costo:1,velocidad:1,razon:2,tools:2,hardware:1}
      },
      {
        id:'ollama', name:'Ollama', sub:'Open Source · Local',
        baseQuality:65,
        desc:'Modelos potentes en tu propio hardware. Cero latencia de red, privacidad total, sin costo de API y sin dependencia de la nube.',
        tags:['local','sin internet','privacidad'],
        link:'https://ollama.ai',
        scores:{costo:0,velocidad:1,razon:1,tools:0,hardware:1}
      },
      {
        id: 'opencode',
        name: 'OpenCode',
        sub: 'SST · Open Source',
        baseQuality: 72,
        desc: 'Agente de coding open source para terminal. Model-neutral: soporta +75 providers (Claude, GPT, Gemini, Ollama). MCP nativo, sin vendor lock-in.',
        tags: ['coding', 'terminal', 'model-neutral'],
        link: 'https://opencode.ai',
        scores: { costo: 0, velocidad: 1, razon: 1, tools: 2, hardware: 2 }
      },
      {
        id: 'qwen',
        name: 'Qwen 3',
        sub: 'Alibaba Cloud',
        baseQuality: 77,
        desc: 'Rey del coding y la matemática entre los open-weight. Razonamiento híbrido (thinking/non-thinking), 119 idiomas, MCP nativo. Precio muy bajo vía DeepInfra u OpenRouter.',
        tags: ['coding', 'open weight', 'math', 'económico'],
        link: 'https://qwen.ai',
        scores: { costo: 0, velocidad: 2, razon: 2, tools: 1, hardware: 2 }
      },
      {
        id: 'glm',
        name: 'GLM (Z.ai)',
        sub: 'Zhipu AI · China',
        baseQuality: 70,
        desc: 'Modelo frontier de 355B parámetros con licencia MIT. El único a esta escala que podés hostear vos mismo, customizar y ownearlo sin depender de una API propietaria.',
        tags: ['355B MoE', 'MIT license', 'self-host', 'coding'],
        link: 'https://www.zhipuai.cn/en',
        scores: { costo: 1, velocidad: 1, razon: 2, tools: 2, hardware: 2 }
      },
      {
        id:'claude_mcp', name:'Claude + MCP', sub:'Anthropic · Full Stack',
        baseQuality:92,
        desc:'Claude con Model Context Protocol activo. Integración total con herramientas externas, máximo razonamiento y agentes autónomos reales.',
        tags:['MCP','agentes','top tier'],
        link:'https://docs.anthropic.com/mcp',
        scores:{costo:2,velocidad:2,razon:2,tools:2,hardware:1}
      }
    ];
    
    const SLIDERS = [
      { id:'costo',     label:'Costo',   ticks:['gratis','freemium','premium'] },
      { id:'velocidad', label:'Veloc.',  ticks:['lento','normal','rápido'] },
      { id:'razon',     label:'Razon.',  ticks:['básico','avanzado','experto'] },
      { id:'tools',     label:'Tools',   ticks:['ninguna','algunas','full'] },
      { id:'hardware',  label:'HW',      ticks:['cloud','híbrido','local'] }
    ];
    
    const CSS = `
      ai-mixer{display:block;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}
      .mx-shell{
        width:350px;border-radius:16px;overflow:hidden;height:300px;
        border:1.5px solid rgba(0,0,0,.12);
        background:#f5f5f5;
        box-shadow:0 4px 24px rgba(0,0,0,.10);
      }
      .mx-logo-zone{
        display:flex;align-items:center;gap:14px;
        padding:16px 20px;background:#fff;
        border-bottom:1px solid rgba(0,0,0,.07);
        cursor:pointer;min-height:72px;
        transition:background .15s;
      }
      .mx-logo-zone:hover{background:#fafafa}
      .mx-logo-img{width:40px;height:40px;border-radius:10px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;}
      .mx-logo-img svg{display:block}
      .mx-logo-name{font-size:17px;font-weight:600;color:#111;letter-spacing:-.3px}
      .mx-logo-sub{font-size:11px;color:#888;margin-top:2px}
      .mx-hint{font-size:10px;color:#bbb;display:flex;align-items:center;gap:3px;flex-shrink:0}
      #close-btn{margin-left:auto}
      .mx-qbar{
        position:relative;height:26px;
        display:flex;align-items:center;justify-content:center;
        overflow:hidden;background:#ebecf0;box-shadow:0 1px 10px rgba(0,0,0,.10);
      }
      .mx-qfill{position:absolute;top:0;left:0;right:0;transition:height .4s ease,background .4s ease}
      .mx-qlabel{position:relative;z-index:1;font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;color:#555}
      .mx-faders{
        padding:14px 10px 10px;
        display:flex;gap:4px;justify-content:center;
        background:#f5f5f5;
      }
      .mx-fader-col{display:flex;flex-direction:column;align-items:center;gap:4px;flex:1}
      .mx-fader-name{font-size:8px;font-weight:600;letter-spacing:.5px;text-transform:uppercase;color:#999;text-align:center}
      .mx-rail{
        position:relative;width:8px;height:110px;
        background:#e0e0e0;border-radius:4px;
        border:1px solid rgba(0,0,0,.08);cursor:pointer;
      }
      .mx-rfill{position:absolute;bottom:0;left:0;right:0;border-radius:4px;transition:height .15s,background .3s}
      .mx-knob{
        position:absolute;left:50%;transform:translateX(-50%);
        width:22px;height:8px;background:#fff;
        border:1.5px solid rgba(0,0,0,.2);border-radius:3px;
        cursor:grab;transition:bottom .15s;z-index:2;
        box-shadow:0 1px 4px rgba(0,0,0,.15);
      }
      .mx-knob:active{cursor:grabbing}
      .mx-tick-now{font-size:8px;color:#666;text-align:center;min-height:12px;font-weight:500}
    
      .mx-info{padding:18px 20px 14px;display:flex;flex-direction:column;gap:10px;background:#f5f5f5}
      .mx-info-desc{font-size:13px;color:#555;line-height:1.65;margin:0}
      .mx-info-tags{display:flex;flex-wrap:wrap;gap:5px}
      .mx-tag{
        font-size:10px;padding:3px 10px;border-radius:20px;
        border:1px solid rgba(0,0,0,.12);color:#666;background:#fff;
      }
      .mx-info-link{
        font-size:11px;color:#0066cc;text-decoration:none;
        display:inline-flex;align-items:center;gap:4px;width:fit-content;
      }
      .mx-info-link:hover{text-decoration:underline}
      .mx-qbar2{
        position:relative;height:26px;
        display:flex;align-items:center;justify-content:center;
        overflow:hidden;background:#f0f0f0;
        border-top:1px solid rgba(0,0,0,.07);
      }
      .mx-qfill2{position:absolute;top:0;left:0;right:0;transition:height .4s,background .4s}
      .mx-qlabel2{position:relative;z-index:1;font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;color:#555}
      .mx-shell{display:flex;flex-direction:column}
      .s1,.s2,.s3{flex:1;min-height:0;display:flex;flex-direction:column;overflow:hidden}
      .mx-actions{margin-left:auto;display:flex;align-items:center;gap:8px;flex-shrink:0}
      .mx-btn-todos{
        font:inherit;font-size:10px;font-weight:600;letter-spacing:.4px;text-transform:uppercase;
        color:#0066cc;background:#fff;border:1px solid rgba(0,102,204,.35);
        border-radius:8px;padding:5px 10px;cursor:pointer;transition:background .15s,border-color .15s;
      }
      .mx-btn-todos:hover{background:#f0f7ff;border-color:rgba(0,102,204,.55)}
      .mx-todos-bar{
        flex-shrink:0;width:100%;font:inherit;font-size:11px;font-weight:600;
        text-align:center;padding:8px 12px;cursor:pointer;color:#0066cc;background:#eef4fc;
        border:none;border-bottom:1px solid rgba(0,0,0,.07);transition:background .15s;
      }
      .mx-todos-bar:hover{background:#e2ecfa}
      .mx-todos-head{
        flex-shrink:0;display:flex;align-items:center;gap:10px;padding:10px 14px;
        background:#fff;border-bottom:1px solid rgba(0,0,0,.07);
      }
      .mx-todos-back{
        font:inherit;font-size:11px;color:#555;background:transparent;border:none;
        padding:4px 0;cursor:pointer;text-decoration:underline;text-underline-offset:2px;
      }
      .mx-todos-back:hover{color:#111}
      .mx-todos-title{font-size:12px;font-weight:600;color:#333;letter-spacing:-.2px}
      .mx-todos-grid{
        flex:1;min-height:0;overflow-y:auto;padding:10px 12px 12px;
        display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;background:#f5f5f5;
      }
      .mx-todos-card{
        display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center;
        padding:8px 4px;border-radius:10px;border:1px solid rgba(0,0,0,.1);
        background:#fff;cursor:pointer;font:inherit;transition:background .15s,box-shadow .15s,border-color .15s;
      }
      .mx-todos-card:hover{background:#fafafa;box-shadow:0 2px 8px rgba(0,0,0,.06);border-color:rgba(0,102,204,.25)}
      .mx-todos-logo{width:36px;height:36px;border-radius:8px;overflow:hidden;display:flex;align-items:center;justify-content:center;flex-shrink:0}
      .mx-todos-logo svg{display:block;max-width:100%;max-height:100%}
      .mx-todos-name{font-size:10px;font-weight:600;color:#111;line-height:1.2;max-width:100%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}
      .mx-todos-sub{font-size:8px;color:#888;line-height:1.25;max-width:100%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}
      .hidden{display:none!important}
    `;
    
    function matchAI(vals) {
      let best = null, bestScore = -Infinity;
      for (const ai of AIS) {
        let score = 0;
        for (const s of SLIDERS) score += (2 - Math.abs(ai.scores[s.id] - vals[s.id])) * 2;
        if (score > bestScore) { bestScore = score; best = ai; }
      }
      return best;
    }
    
    function calcQuality(ai, vals) {
      const maxDiff = SLIDERS.length * 2;
      let totalDiff = 0;
      for (const s of SLIDERS) totalDiff += Math.abs(ai.scores[s.id] - vals[s.id]);
      const matchPct = 1 - (totalDiff / maxDiff);
      return Math.round(ai.baseQuality * (0.5 + 0.5 * matchPct));
    }
    
    function qColor(pct, a) {
      if (pct < 40) return `rgba(220,50,50,${a})`;
      if (pct < 60) return `rgba(230,120,30,${a})`;
      if (pct < 75) return `rgba(200,170,20,${a})`;
      return `rgba(40,180,90,${a})`;
    }
    
    const SVG_EXTERNAL = `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
    
    class AIMixer extends HTMLElement {
      constructor() {
        super();
        this.vals = {};
        for (const s of SLIDERS) this.vals[s.id] = 1;
        this.stage = 1;
        this.dragging = null;
        this.todosReturnStage = 1;
      }
    
      connectedCallback() {
        if (!document.getElementById('ai-mixer-styles')) {
          const style = document.createElement('style');
          style.id = 'ai-mixer-styles';
          style.textContent = CSS;
          document.head.appendChild(style);
        }
        this.render();
        this.update();
      }
    
      render() {
        this.innerHTML = `
          <div class="mx-shell">
            <div class="s1">
              <div class="mx-logo-zone" id="logo-click">
                <div class="mx-logo-img" id="limg"></div>
                <div>
                  <div class="mx-logo-name" id="lname"></div>
                  <div class="mx-logo-sub" id="lsub"></div>
                </div>
                <div class="mx-actions">
                  <button type="button" class="mx-btn-todos" id="btn-todos-main">Todos</button>
                  <div class="mx-hint">▸ info</div>
                </div>
              </div>
              <div class="mx-qbar">
                <div class="mx-qfill" id="qf1"></div>
                <span class="mx-qlabel" id="ql1"></span>
              </div>
              <div class="mx-faders" id="fz"></div>
            </div>
            <div class="s2 hidden">
              <div class="mx-logo-zone" style="cursor:default">
                <div class="mx-logo-img" id="limg2"></div>
                <div>
                  <div class="mx-logo-name" id="lname2"></div>
                  <div class="mx-logo-sub" id="lsub2"></div>
                </div>
                <div class="mx-hint" id="close-btn" style="cursor:pointer">✕ cerrar</div>
              </div>
              <button type="button" class="mx-todos-bar" id="btn-todos-info">Todos</button>
              <div class="mx-info">
                <p class="mx-info-desc" id="idesc"></p>
                <div class="mx-info-tags" id="itags"></div>
                <a class="mx-info-link" id="ilink" target="_blank">${SVG_EXTERNAL} <span id="ilinktext"></span></a>
              </div>
              <div class="mx-qbar2">
                <div class="mx-qfill2" id="qf2"></div>
                <span class="mx-qlabel2" id="ql2"></span>
              </div>
            </div>
            <div class="s3 hidden">
              <div class="mx-todos-head">
                <button type="button" class="mx-todos-back" id="btn-todos-back">← Volver</button>
                <span class="mx-todos-title">Todos los modelos</span>
              </div>
              <div class="mx-todos-grid" id="todos-grid"></div>
            </div>
          </div>`;
    
        this.buildFaders();
        this.buildTodosGrid();
        this.bindEvents();
      }
    
      buildFaders() {
        const fz = this.querySelector('#fz');
        fz.innerHTML = '';
        for (const s of SLIDERS) {
          const col = document.createElement('div');
          col.className = 'mx-fader-col';
          col.innerHTML = `
            <div class="mx-fader-name">${s.label}</div>
            <div class="mx-rail" data-id="${s.id}">
              <div class="mx-rfill" id="rf-${s.id}"></div>
              <div class="mx-knob" id="rk-${s.id}"></div>
            </div>
            <div class="mx-tick-now" id="tn-${s.id}"></div>`;
          fz.appendChild(col);
        }
      }
    
      buildTodosGrid() {
        const grid = this.querySelector('#todos-grid');
        if (!grid) return;
        grid.innerHTML = '';
        for (const ai of AIS) {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'mx-todos-card';
          btn.dataset.id = ai.id;
          const logo = document.createElement('div');
          logo.className = 'mx-todos-logo';
          logo.innerHTML = LOGOS[ai.id] || '';
          const nm = document.createElement('div');
          nm.className = 'mx-todos-name';
          nm.textContent = ai.name;
          const sub = document.createElement('div');
          sub.className = 'mx-todos-sub';
          sub.textContent = ai.sub;
          btn.append(logo, nm, sub);
          btn.addEventListener('click', () => this.selectAI(ai.id));
          grid.appendChild(btn);
        }
      }
    
      bindEvents() {
        this.querySelector('#logo-click').addEventListener('click', () => this.setStage(2));
        this.querySelector('#close-btn').addEventListener('click', () => this.setStage(1));
        this.querySelector('#btn-todos-main').addEventListener('click', e => {
          e.stopPropagation();
          this.todosReturnStage = 1;
          this.setStage(3);
        });
        this.querySelector('#btn-todos-info').addEventListener('click', () => {
          this.todosReturnStage = 2;
          this.setStage(3);
        });
        this.querySelector('#btn-todos-back').addEventListener('click', () => this.setStage(this.todosReturnStage));
    
        this.querySelectorAll('.mx-rail').forEach(rail => {
          rail.addEventListener('mousedown', e => { e.stopPropagation(); this.startDrag(rail, e.clientY); });
          rail.addEventListener('touchstart', e => { e.stopPropagation(); this.startDrag(rail, e.touches[0].clientY); }, {passive:true});
        });
    
        document.addEventListener('mousemove', e => this.onDrag(e.clientY));
        document.addEventListener('touchmove', e => this.onDrag(e.touches[0].clientY), {passive:true});
        document.addEventListener('mouseup', () => this.dragging = null);
        document.addEventListener('touchend', () => this.dragging = null);
    
        this.querySelector('#ilink').addEventListener('click', e => e.stopPropagation());
      }
    
      startDrag(rail, y) {
        this.dragging = { id: rail.dataset.id, rect: rail.getBoundingClientRect() };
        this.updateFromY(this.dragging.id, y, this.dragging.rect);
      }
    
      onDrag(y) {
        if (!this.dragging) return;
        this.updateFromY(this.dragging.id, y, this.dragging.rect);
      }
    
      updateFromY(id, y, rect) {
        const pct = 1 - Math.min(1, Math.max(0, (y - rect.top) / rect.height));
        this.vals[id] = Math.round(pct * 2);
        this.update();
      }
    
      selectAI(id) {
        const ai = AIS.find(a => a.id === id);
        if (!ai) return;
        for (const s of SLIDERS) this.vals[s.id] = ai.scores[s.id];
        this.setStage(1);
        this.update();
      }
    
      setStage(n) {
        this.stage = n;
        const s1 = this.querySelector('.s1');
        const s2 = this.querySelector('.s2');
        const s3 = this.querySelector('.s3');
        if (s1) s1.classList.toggle('hidden', n !== 1);
        if (s2) s2.classList.toggle('hidden', n !== 2);
        if (s3) s3.classList.toggle('hidden', n !== 3);
      }
    
      update() {
        const ai = matchAI(this.vals);
        const pct = calcQuality(ai, this.vals);
    
        [['limg','lname','lsub','qf1','ql1'], ['limg2','lname2','lsub2','qf2','ql2']].forEach(([imgId,nameId,subId,qfId,qlId]) => {
          const img = this.querySelector('#'+imgId);
          if (!img) return;
          img.innerHTML = LOGOS[ai.id] || '';
          this.querySelector('#'+nameId).textContent = ai.name;
          this.querySelector('#'+subId).textContent = ai.sub;
          const qf = this.querySelector('#'+qfId);
          const ql = this.querySelector('#'+qlId);
          if (qf) { qf.style.height = pct+'%'; qf.style.background = qColor(pct, 0.22); }
          if (ql) ql.textContent = `calidad · ${pct}%`;
        });
    
        const idesc = this.querySelector('#idesc');
        if (idesc) {
          idesc.textContent = ai.desc;
          this.querySelector('#itags').innerHTML = ai.tags.map(t=>`<span class="mx-tag">${t}</span>`).join('');
          const lnk = this.querySelector('#ilink');
          lnk.href = ai.link;
          this.querySelector('#ilinktext').textContent = ai.link.replace('https://','');
        }
    
        for (const s of SLIDERS) {
          const v = this.vals[s.id];
          const ph = (v/2)*100;
          const rf = this.querySelector(`#rf-${s.id}`);
          const rk = this.querySelector(`#rk-${s.id}`);
          const tn = this.querySelector(`#tn-${s.id}`);
          if (rf) { rf.style.height = ph+'%'; rf.style.background = qColor(pct, 0.6); }
          if (rk) rk.style.bottom = `calc(${ph}% - 4px)`;
          if (tn) tn.textContent = s.ticks[v];
        }
      }
    }
    
    if (!customElements.get('ai-mixer')) {
      customElements.define('ai-mixer', AIMixer);
    }
    
    })();