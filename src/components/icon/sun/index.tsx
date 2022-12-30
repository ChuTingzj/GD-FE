import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
const SunSvg = () => (
    <svg d="1671588027421" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="2709" width="16" height="16">
        <path
            d="M512 85.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v42.666667a42.666667 42.666667 0 1 1-85.333334 0V128a42.666667 42.666667 0 0 1 42.666667-42.666667z m301.696 124.970667a42.666667 42.666667 0 0 1 0 60.330667l-30.165333 30.165333a42.666667 42.666667 0 1 1-60.330667-60.330667l30.165333-30.165333a42.666667 42.666667 0 0 1 60.330667 0z m-603.392 0a42.666667 42.666667 0 0 1 60.330667 0l30.165333 30.165333A42.666667 42.666667 0 0 1 240.469333 300.8l-30.165333-30.165333a42.666667 42.666667 0 0 1 0-60.330667zM512 341.333333a170.666667 170.666667 0 1 0 0 341.333334 170.666667 170.666667 0 0 0 0-341.333334z m-256 170.666667a256 256 0 1 1 512 0 256 256 0 0 1-512 0z m-170.666667 0a42.666667 42.666667 0 0 1 42.666667-42.666667h42.666667a42.666667 42.666667 0 1 1 0 85.333334H128a42.666667 42.666667 0 0 1-42.666667-42.666667z m725.333334 0a42.666667 42.666667 0 0 1 42.666666-42.666667h42.666667a42.666667 42.666667 0 1 1 0 85.333334h-42.666667a42.666667 42.666667 0 0 1-42.666666-42.666667zM240.469333 723.2a42.666667 42.666667 0 0 1 60.330667 60.330667l-30.165333 30.165333a42.666667 42.666667 0 0 1-60.330667-60.330667l30.165333-30.165333z m482.730667 60.330667a42.666667 42.666667 0 0 1 60.330667-60.330667l30.165333 30.165333a42.666667 42.666667 0 0 1-60.330667 60.330667l-30.165333-30.165333zM512 810.666667a42.666667 42.666667 0 0 1 42.666667 42.666666v42.666667a42.666667 42.666667 0 1 1-85.333334 0v-42.666667a42.666667 42.666667 0 0 1 42.666667-42.666666z"
            fill="#0D0D0D" p-id="2710"></path>
    </svg>
)
export const SunIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={SunSvg} {...props} />
);