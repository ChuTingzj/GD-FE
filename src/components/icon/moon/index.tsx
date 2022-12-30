import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
const MoonSvg = () => (
    <svg d="1671590294918" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="2460" width="16" height="16">
        <path
            d="M399.36 140.501333a42.666667 42.666667 0 0 1 7.978667 49.365334A317.866667 317.866667 0 0 0 834.133333 616.661333a42.666667 42.666667 0 0 1 57.301334 57.301334 403.2 403.2 0 1 1-541.44-541.44 42.666667 42.666667 0 0 1 49.408 7.978666zM291.114667 284.586667A317.866667 317.866667 0 0 0 739.413333 732.970667 403.2 403.2 0 0 1 291.029333 284.586667z"
            fill="#0D0D0D" p-id="2461"></path>
    </svg>
)
export const MoonIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={MoonSvg} {...props} />
);
