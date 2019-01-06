import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Label } from "./Label";

const stories = storiesOf("Components", module);
stories.addDecorator(withKnobs);

stories.add("Label", () => <Label>{text("Label", "test")}</Label>);
