import type { WebComponentProps } from "@lit/react";
import { LitElement } from "lit";
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
export declare class FooBar extends LitElement {
    onClick(): void;
    render(): import("lit-html").TemplateResult<1>;
}
