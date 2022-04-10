import SidebarFooter from "./sidebar/footer";
import SidebarLogo from "./sidebar/logo";
import LogoutMenuItem from "./sidebar/logout";
import SidebarMenuItem from "./sidebar/menu-item";

const Sidebar = () => {   
    
    return (
        <div id="kt_aside" className="aside aside-dark aside-hoverable" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_mobile_toggle">
            <SidebarLogo />
            <div className="aside-menu flex-column-fluid">
                <div className="hover-scroll-overlay-y my-5 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside_menu" data-kt-scroll-offset="0">
                    <div className="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500" id="#kt_aside_menu" data-kt-menu="true" data-kt-menu-expand="false">
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                            <SidebarMenuItem title="Dashboard" href="/" showForAuthenticated={true}/>
                            <SidebarMenuItem title="My Wallet" href="/rewards/wallet" showForAuthenticated={true} />
                            <SidebarMenuItem title="My Rewards" href="/rewards" showForAuthenticated={true}/>
                            <SidebarMenuItem title="Tribe Settings" href="/tribe/settings" showForAuthenticated={true}/>
                            <SidebarMenuItem title="Login" href="/auth/login" showForAuthenticated={false} />
                            <LogoutMenuItem />
                            <SidebarMenuItem title="Register" href="/auth/register" showForAuthenticated={false}/>
                        </div>
                    </div>
                </div>
            </div>
            <SidebarFooter />
        </div>
    );
}

export default Sidebar;