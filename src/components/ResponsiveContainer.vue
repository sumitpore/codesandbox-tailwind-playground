<template>
  <div>
    <div class="flex items-end justify-center bg-white p-2 border-b">
      <span
        class="inline-block text-center cursor-pointer select-none mr-8"
        :class="activeScreen === 'xs' ? 'text-gray-800' : 'text-gray-500'"
        @click="activeScreen = 'xs'"
      >
        <svg
          :width="0.857142857142857 * 10"
          height="24"
          class="fill-current block mx-auto mb-1"
          viewBox="0 0 10 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z"
            fill-rule="evenodd"
          ></path>
        </svg>
        <p class="text-xs">xs</p>
      </span>
      <span
        class="inline-block text-center cursor-pointer select-none mr-8"
        :class="activeScreen === 'sm' ? 'text-gray-800' : 'text-gray-500'"
        @click="activeScreen = 'sm'"
      >
        <svg
          :width="0.857142857142857 * 14"
          height="24"
          class="fill-current block mx-auto mb-1"
          viewBox="0 0 14 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
            fill-rule="evenodd"
          ></path>
        </svg>
        <p class="text-xs">sm</p>
      </span>
      <span
        class="inline-block text-center cursor-pointer select-none mr-8"
        :class="activeScreen === 'md' ? 'text-gray-800' : 'text-gray-500'"
        @click="activeScreen = 'md'"
      >
        <svg
          :width="0.857142857142857 * 26"
          height="24"
          class="fill-current block mx-auto mb-1"
          viewBox="0 0 26 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
            fill-rule="evenodd"
          ></path>
        </svg>
        <p class="text-xs">md</p>
      </span>
      <span
        class="inline-block text-center cursor-pointer select-none mr-8"
        :class="activeScreen === 'lg' ? 'text-gray-800' : 'text-gray-500'"
        @click="activeScreen = 'lg'"
      >
        <svg
          :width="0.857142857142857 * 38"
          height="24"
          class="fill-current block mx-auto mb-1"
          viewBox="0 0 38 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z"
            fill-rule="evenodd"
          ></path>
        </svg>
        <p class="text-xs">lg</p>
      </span>
      <span
        class="inline-block text-center cursor-pointer select-none"
        :class="activeScreen === 'xl' ? 'text-gray-800' : 'text-gray-500'"
        @click="activeScreen = 'xl'"
      >
        <svg
          :width="0.857142857142857 * 36"
          height="24"
          class="fill-current block mx-auto mb-1"
          viewBox="0 0 36 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"
          ></path>
        </svg>
        <p class="text-xs">xl</p>
      </span>
    </div>

    <div ref="container" class="overflow-hidden h-full mb-8 bg-white relative">
      <code id="code" class="hidden">
        <slot/>
      </code>
      <iframe
        src
        ref="iframe"
        class="absolute border-0 inset-0 iframe mx-auto"
        style="height: 100%; transition: width 0.2s ease 0s; width: 0px; transform:scale(1); transform-origin: 0px 0px;"
      ></iframe>
      <div
        v-if="scale < 1"
        class="absolute rounded bottom-0 right-0 p-3 m-4 bg-gray-900 text-gray-500 opacity-50 shadow"
      >Scale {{ parseInt(this.scale * 100) }}%</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeScreen: "xs",
      breakpoints: {
        xs: 640,
        sm: 768,
        md: 1024,
        lg: 1280,
        xl: 1500
      },
      scale: 1
    };
  },

  watch: {
    activeScreen() {
      this.updateIframeSize();
    }
  },
  methods: {
    getContainerWidth() {
      return this.$refs["container"].offsetWidth;
    },
    getContainerHeight() {
      return this.$refs["container"].offsetHeight;
    },
    setDefaultScreen() {
      for (const size in this.breakpoints) {
        if (this.getContainerWidth() >= this.breakpoints[size]) {
          this.activeScreen = size;
        }
      }
    },
    setContainerHeight() {
      this.$refs["container"].style.height = this.$refs["iframe"].style.height =
        window.innerHeight - 65 + "px";
    },
    updateIframeSize() {
      const containerWidth = this.getContainerWidth();
      const targetSize = this.breakpoints[this.activeScreen] - 1;
      this.scale =
        containerWidth / targetSize > 1 ? 1 : containerWidth / targetSize;

      this.$refs["iframe"].style.width = targetSize + "px";
      this.$refs["iframe"].style.transform = `scale(${this.scale})`;
    },
    updateIframeContent() {
      const code = document.querySelector("#code").innerHTML;

      const html = `<html class="flex w-full h-full">
                  <head>
                    <meta charset="UTF-8" />
                    <link
                      href="https://unpkg.com/tailwindcss@1.1.4/dist/tailwind.min.css"
                      rel="stylesheet"
                    />
                  </head>

                  <body style="height: min-content" class="w-full flex items-center justify-center my-auto">
                    ${code}
                  </body>
                </html>`;
      this.$refs["iframe"].src = "data:text/html," + encodeURIComponent(html);
    },
    registerCodeObserver() {
      this.observer = new MutationObserver(
        function(mutations) {
          this.updateIframeContent();
        }.bind(this)
      );

      // Setup the observer
      this.observer.observe(this.$refs["container"].querySelector("#code"), {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setDefaultScreen();
      this.setContainerHeight();
      this.updateIframeContent();
      this.updateIframeSize();
      this.registerCodeObserver();
    });

    document.body.addEventListener("resize", this.setContainerHeight);
  },
  beforeDestroy: function() {
    this.observer.disconnect();
    document.body.removeEventListener("resize", this.setContainerHeight);
  }
};
</script>