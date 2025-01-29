import type { WebComponentProps } from "@lit/react";

import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

declare global {
  interface HTMLElementTagNameMap {
    "foo-bar": FooBar;
  }
}

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "foo-bar": WebComponentProps<FooBar>;
    }
  }
}

@customElement("foo-bar")
export class FooBar extends LitElement {
  onClick() {
    console.log("clicked");
    this.dispatchEvent(new CustomEvent("foobarclick"));
  }

  render() {
    return html`<button @click=${this.onClick}><slot></slot></button>`;
  }
}
