import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

type Type = "dark" | "light";

type Button = {
  label?: string;
  url?: string;
  style?: {
    color?: Type;
    border?: "yes" | "no";
  };
};

export interface Nav {
  logo: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links?: {
      label?: string;
      url?: string;
    }[];
    buttons?: Button[];
  };
}

export const ColorType: Record<Type, string> = {
  "dark": "base-content",
  "light": "base-100",
};

export const StyleType: Record<"background" | "color", string> = {
  "background": "bg-",
  "color": "text-",
};

function getButtonStyle(button: Button) {
  const baseStyle = "px-6 py-3";
  const color = button.style?.color || "dark";
  const combinedStyle = `${StyleType["background"]}${ColorType[color]} ${
    StyleType["color"]
  }${ColorType[color === "dark" ? "light" : "dark"]}`;
  const borderStyle = button.style?.border === "yes"
    ? "border-2 border-base-content rounded-xl"
    : "rounded-xl border-2 border-transparent";

  return `${baseStyle} ${combinedStyle} ${borderStyle}`.trim();
}

const generateLineStyles = (position: string) => `
  absolute ${position} z-50 block h-0.5 w-7 bg-black transition-all duration-200 ease-out 
`;

const lineStyles = [
  generateLineStyles("top-[-0.7rem]") +
  "peer-checked:translate-y-[0.7rem] peer-checked:rotate-[45deg]",
  generateLineStyles("top-[-0.35rem]") + "peer-checked:opacity-0",
  generateLineStyles("top-[0]") +
  "peer-checked:-translate-y-[0.2rem] peer-checked:-rotate-[45deg]",
];

export default function Nav({
  logo: {
    src =
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt = "Logo",
  } = {},
  navigation: {
    links = [
      { label: "Home", url: "/" },
      { label: "About us", url: "/about" },
      { label: "Princing", url: "/pricing" },
      { label: "Contact", url: "/contact" },
    ],
    buttons = [
      { label: "Change me", url: "/changeme" },
      { label: "Change me", url: "/changeme" },
    ],
  } = {},
}: Nav) {
  return (
    <nav class="flex gap-8 items-center justify-between px-16 py-4">
      <Image src={src || ""} width={100} height={28} alt={alt} />

      <label
        class="cursor-pointer lg:hidden pt-6 px-3 relative z-40"
        for="menu-mobile"
      >
        <input class="hidden peer" type="checkbox" id="menu-mobile" />
        {lineStyles.map((style, index) => (
          <div key={index} class={`relative ${style}`}></div>
        ))}
        <div class="backdrop-blur-sm bg-black/50 fixed h-full hidden inset-0 peer-checked:block w-full z-40">
          &nbsp;
        </div>
        <div class="duration-500 fixed h-full overflow-y-auto overscroll-y-none peer-checked:translate-x-0 right-0 top-0 transition translate-x-full w-full z-40">
          <div class="bg-base-100 flex flex-col float-right gap-8 min-h-full pt-12 px-6 shadow-2xl w-1/2">
            <ul class="flex flex-col gap-8">
              {links.map((link) => (
                <li>
                  <a href={link.url} aria-label={link.label}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul class="flex flex-col gap-8">
              {buttons.map((button) => (
                <li>
                  <a
                    href={button.url}
                    class={getButtonStyle(button)}
                    aria-label={button.label}
                  >
                    {button.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </label>

      <ul class="hidden items-center justify-between lg:flex w-full">
        <ul class="flex gap-8">
          {links.map((link) => (
            <li>
              <a href={link.url} aria-label={link.label}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ul class="flex gap-4">
          {buttons.map((button) => (
            <li>
              <a
                href={button.url}
                class={getButtonStyle(button)}
                aria-label={button.label}
              >
                {button.label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
