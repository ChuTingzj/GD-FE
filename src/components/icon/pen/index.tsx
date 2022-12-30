import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
const PenSvg = () => (
  <svg d="1671613327083" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="880" width="16" height="16"><path d="M818.346667 352.853333l-202.837334-188.16 56.490667-60.885333 202.837333 188.16zM438.741333 762.197333l-202.922666-188.245333 360.874666-388.949333 202.88 188.245333zM217.002667 594.218667l202.922666 188.288-270.890666 88.448z" fill="" p-id="881"></path><path d="M747.648 98.56l126.805333 117.632c20.992 19.498667 21.162667 53.504 0.426667 75.861333-20.821333 22.442667-54.698667 24.746667-75.690667 5.290667L672.384 179.626667c-21.034667-19.498667-21.205333-53.504-0.426667-75.861334 20.821333-22.4 54.698667-24.746667 75.690667-5.290666z" fill="" p-id="882"></path>
  </svg>
)
export const PenIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={PenSvg} {...props} />
);