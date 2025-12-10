export class NavItem {
    label: string;
    route: string;

    constructor({  label, route }: { isMain?: boolean, label: string, route: string }) {
        this.label = label;
        this.route = route;
    }
}

const shopRoute = new NavItem({ label: 'Shop', route: '/shop'});
const storesRoute = new NavItem({ label: 'Stores', route: '/stores' })
const blogRoute = new NavItem({ label: 'Blog', route: '/blog' })

export const navItems: Array<NavItem> = [
    shopRoute,
    storesRoute,
    blogRoute
]