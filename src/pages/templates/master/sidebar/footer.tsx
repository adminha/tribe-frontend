const SidebarFooter = () => {
    return (
        <div className="aside-footer flex-column-auto pt-5 pb-7 px-5" id="kt_aside_footer">
            <a href='https://github.com/adminha/tribe/' className="btn btn-custom btn-primary w-100 fs-8">
                Github Repo (Backend/NestJS)
            </a>
            <a href='https://github.com/adminha/tribe-frontend/' className="btn btn-custom btn-primary w-100 mt-5 fs-8">
                Github Repo (Frontend/React+Redux+NextJS)
            </a>
        </div>
    );
}

export default SidebarFooter;