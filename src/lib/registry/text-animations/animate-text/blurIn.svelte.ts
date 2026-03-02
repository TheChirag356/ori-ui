import type { Action } from "svelte/action";
import { animate, stagger, inView, type AnimationOptions } from "motion";

type Props = AnimationOptions & {
  by: "character" | "word";
  once?: boolean;
  stagger?: number;
};

export const blurIn: Action<HTMLElement, Props> = (
  node,
  data: Props = { by: "word", once: false }
) => {
  let controls: any[] = [];
  let stopInView: (() => void) | null = null;
  const originalHTML = node.innerHTML;

  function splitText() {
    const text = node.textContent ?? "";
    const by = data?.by ?? "character";

    let parts: string[] = [];

    if (by === "word") {
      parts = text.split(/(\s+)/);
    } else {
      parts = [...text];
    }

    node.innerHTML = parts
      .map((part) =>
        part.trim()
          ? `<span style="display:inline-block; will-change: filter, opacity, transform;">${part}</span>`
          : part
      )
      .join("");
  }

  function animateIn() {
    const spans = Array.from(node.querySelectorAll("span"));

    controls = spans.map((el, i) =>
      animate(
        el,
        {
          opacity: [0, 1],
          filter: ["blur(8px)", "blur(0px)"],
          transform: ["translateY(8px)", "translateY(0px)"]
        },
        {
            delay: stagger(data?.stagger) ?? 0,
            ...data
        }
      )
    );
  }

  function setup() {
    stopInView?.();
    controls.forEach((c) => c.stop());
    controls = [];

    node.innerHTML = originalHTML;
    splitText();

    stopInView = inView(node, () => {
      animateIn();

      if (data?.once) {
        stopInView?.();
      }
    });
  }

  setup();

  return {
    update(newData) {
      data = newData;
      setup();
    },
    destroy() {
      controls.forEach((c) => c.stop());
      stopInView?.();
      node.innerHTML = originalHTML;
    }
  };
};
