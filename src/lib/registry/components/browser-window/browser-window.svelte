<script lang="ts">
  type SafariMode = "default" | "simple"

  interface Props {
    url?: string
    mode?: SafariMode
    className?: string
    children?: () => any
  }

  let {
    url,
    mode = "default",
    className = "",
    children,
    ...restProps
  }: Props = $props()

  const SAFARI_WIDTH = 1203
  const SAFARI_HEIGHT = 753

  const SCREEN_X = 1
  const SCREEN_Y = 52
  const SCREEN_WIDTH = 1200
  const SCREEN_HEIGHT = 700

  const LEFT_PCT = (SCREEN_X / SAFARI_WIDTH) * 100
  const TOP_PCT = (SCREEN_Y / SAFARI_HEIGHT) * 100
  const WIDTH_PCT = (SCREEN_WIDTH / SAFARI_WIDTH) * 100
  const HEIGHT_PCT = (SCREEN_HEIGHT / SAFARI_HEIGHT) * 100
</script>

<div
  class={`relative inline-block w-full align-middle leading-none ${className}`}
  style={`aspect-ratio: ${SAFARI_WIDTH}/${SAFARI_HEIGHT};`}
  {...restProps}
>
  <!-- Screen Content -->
  <div
    class="pointer-events-none absolute z-0 overflow-hidden"
    style="
      left: {LEFT_PCT}%;
      top: {TOP_PCT}%;
      width: {WIDTH_PCT}%;
      height: {HEIGHT_PCT}%;
      border-radius: 0 0 11px 11px;
    "
  >
    {@render children?.()}
  </div>

  <!-- Safari Frame -->
  <svg
    viewBox={`0 0 ${SAFARI_WIDTH} ${SAFARI_HEIGHT}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="absolute inset-0 z-10 size-full"
    style="transform: translateZ(0);"
  >
    <defs>
      <clipPath id="path0">
        <rect width={SAFARI_WIDTH} height={SAFARI_HEIGHT} fill="white" />
      </clipPath>

      <clipPath id="roundedBottom">
        <path
          d="M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z"
          fill="white"
        />
      </clipPath>
    </defs>

    <g clip-path="url(#path0)">
      <!-- Body -->
      <path
        d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z"
        class="fill-[#E5E5E5] dark:fill-[#404040]"
      />

      <!-- Top Bar -->
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z"
        class="fill-[#E5E5E5] dark:fill-[#404040]"
      />

      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z"
        class="fill-white dark:fill-[#262626]"
      />

      <!-- Window Controls -->
      <circle cx="27" cy="25" r="6" class="fill-[#E5E5E5] dark:fill-[#404040]" />
      <circle cx="47" cy="25" r="6" class="fill-[#E5E5E5] dark:fill-[#404040]" />
      <circle cx="67" cy="25" r="6" class="fill-[#E5E5E5] dark:fill-[#404040]" />

      <!-- URL Bar -->
      <path
        d="M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z"
        class="fill-[#E5E5E5] dark:fill-[#404040]"
      />

      <!-- URL Text -->
      <text
        x="580"
        y="30"
        fill="#A3A3A3"
        font-size="12"
        font-family="Arial, sans-serif"
      >
        {url}
      </text>

      {#if mode === "default"}
        <!-- You can paste the remaining icon SVG paths here exactly as-is -->
      {/if}
    </g>
  </svg>
</div>