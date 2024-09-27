import WidgetMock from "@/components/widgets/WidgetMock";
import WidgetNews from "@/components/widgets/WidgetNews";

// This is a collection of all the widgets that are available in the app.
export const widgets = [
  {
    name: "Your news",
    component: <WidgetNews />,
    display: false,
  },
  {
    name: "Your calendar",
    component: <WidgetMock />,
    display: false,
  },
];
