import WidgetMock from "@/components/widgets/WidgetMock";
import WidgetNews from "@/components/widgets/WidgetNews";

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
