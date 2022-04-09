import Link from "next/link";
import Head from "../templates/master/head";

function Rewards() {
    return (
        <>
            <Head title="My Rewards" />
            <div className="card mb-5 mb-xl-10">
                <div className="card-header border-0 cursor-pointer">
                    <div className="row align-items-center">
                        <div className="card-title m-0">
                            <h3 className="fw-bolder m-0">Earnings & Rewards</h3>
                        </div>
                    </div>
                </div>
                <div className="card-body border-top p-9">
                    <table className="table align-middle table-row-dashed fs-6 gy-3 dataTable no-footer" id="kt_table_widget_4_table">
                        <thead>
                            <tr className="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                                <th className="min-w-100px sorting_disabled" rowSpan={2} colSpan={1}>Order ID</th>
                                <th className="text-end min-w-100px sorting_disabled" rowSpan={1} colSpan={1} >Created</th>
                                <th className="text-end min-w-125px sorting_disabled" rowSpan={1} colSpan={1} >Customer</th>
                                <th className="text-end min-w-100px sorting_disabled" rowSpan={1} colSpan={1} >Total</th>
                                <th className="text-end min-w-100px sorting_disabled" rowSpan={1} colSpan={1}>Profit</th>
                                <th className="text-end min-w-50px sorting_disabled" rowSpan={1} colSpan={1}>Status</th>
                                <th className="text-end sorting_disabled" rowSpan={1} colSpan={1} ></th>
                            </tr>
                        </thead>
                        <tbody className="fw-bolder text-gray-600">
                            <tr className="odd">
                                <td>
                                    <a href="/metronic8/demo1/../demo1/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">#XGY-346</a>
                                </td>
                                <td className="text-end">7 min ago</td>
                                <td className="text-end">
                                    <a href="#" className="text-gray-600 text-hover-primary">Albert Flores</a>
                                </td>
                                <td className="text-end">$630.00</td>
                                <td className="text-end">
                                    <span className="text-gray-800 fw-boldest">$86.70</span>
                                </td>
                                <td className="text-end">
                                    <span className="badge py-3 px-4 fs-7 badge-light-warning">Pending</span>
                                </td>
                                <td className="text-end">
                                    <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary toggle h-25px w-25px" data-kt-table-widget-4="expand_row">
                                        <span className="svg-icon svg-icon-3 m-0 toggle-off">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.5" x="11" y="18" width="12" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor"></rect>
                                                <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"></rect>
                                            </svg>
                                        </span>
                                        <span className="svg-icon svg-icon-3 m-0 toggle-on">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"></rect>
                                            </svg>
                                        </span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="even">
                                <td>
                                    <a href="/metronic8/demo1/../demo1/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">#YHD-047</a>
                                </td>
                                <td className="text-end">52 min ago</td>
                                <td className="text-end">
                                    <a href="#" className="text-gray-600 text-hover-primary">Jenny Wilson</a>
                                </td>
                                <td className="text-end">$25.00</td>
                                <td className="text-end">
                                    <span className="text-gray-800 fw-boldest">$4.20</span>
                                </td>
                                <td className="text-end">
                                    <span className="badge py-3 px-4 fs-7 badge-light-primary">Confirmed</span>
                                </td>
                                <td className="text-end">
                                    <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary toggle h-25px w-25px" data-kt-table-widget-4="expand_row">
                                        <span className="svg-icon svg-icon-3 m-0 toggle-off">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.5" x="11" y="18" width="12" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor"></rect>
                                                <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"></rect>
                                            </svg>
                                        </span>
                                        <span className="svg-icon svg-icon-3 m-0 toggle-on">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"></rect>
                                            </svg>
                                        </span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>
                                    <a href="/metronic8/demo1/../demo1/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">#SRR-678</a>
                                </td>
                                <td className="text-end">1 hour ago</td>
                                <td className="text-end">
                                    <a href="#" className="text-gray-600 text-hover-primary">Robert Fox</a>
                                </td>
                                <td className="text-end">$1,630.00</td>
                                <td className="text-end">
                                    <span className="text-gray-800 fw-boldest">$203.90</span>
                                </td>
                                <td className="text-end">
                                    <span className="badge py-3 px-4 fs-7 badge-light-warning">Pending</span>
                                </td>
                                <td className="text-end">
                                    <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary toggle h-25px w-25px" data-kt-table-widget-4="expand_row">
                                        <span className="svg-icon svg-icon-3 m-0 toggle-off">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.5" x="11" y="18" width="12" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor"></rect>
                                                <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"></rect>
                                            </svg>
                                        </span>
                                        <span className="svg-icon svg-icon-3 m-0 toggle-on">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"></rect>
                                            </svg>
                                        </span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="even">
                                <td>
                                    <a href="/metronic8/demo1/../demo1/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">#PXF-534</a>
                                </td>
                                <td className="text-end">3 hour ago</td>
                                <td className="text-end">
                                    <a href="#" className="text-gray-600 text-hover-primary">Cody Fisher</a>
                                </td>
                                <td className="text-end">$119.00</td>
                                <td className="text-end">
                                    <span className="text-gray-800 fw-boldest">$12.00</span>
                                </td>
                                <td className="text-end">
                                    <span className="badge py-3 px-4 fs-7 badge-light-success">Shipped</span>
                                </td>
                                <td className="text-end">
                                    <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary toggle h-25px w-25px" data-kt-table-widget-4="expand_row">
                                        <span className="svg-icon svg-icon-3 m-0 toggle-off">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.5" x="11" y="18" width="12" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor"></rect>
                                                <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"></rect>
                                            </svg>
                                        </span>
                                        <span className="svg-icon svg-icon-3 m-0 toggle-on">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"></rect>
                                            </svg>
                                        </span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>
                                    <a href="/metronic8/demo1/../demo1/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">#XGD-249</a>
                                </td>
                                <td className="text-end">2 day ago</td>
                                <td className="text-end">
                                    <a href="#" className="text-gray-600 text-hover-primary">Arlene McCoy</a>
                                </td>
                                <td className="text-end">$660.00</td>
                                <td className="text-end">
                                    <span className="text-gray-800 fw-boldest">$52.26</span>
                                </td>
                                <td className="text-end">
                                    <span className="badge py-3 px-4 fs-7 badge-light-success">Shipped</span>
                                </td>
                                <td className="text-end">
                                    <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary toggle h-25px w-25px" data-kt-table-widget-4="expand_row">
                                        <span className="svg-icon svg-icon-3 m-0 toggle-off">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.5" x="11" y="18" width="12" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor"></rect>
                                                <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"></rect>
                                            </svg>
                                        </span>
                                        <span className="svg-icon svg-icon-3 m-0 toggle-on">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"></rect>
                                            </svg>
                                        </span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="even">
                                <td>
                                    <a href="/metronic8/demo1/../demo1/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">#SKP-035</a>
                                </td>
                                <td className="text-end">2 day ago</td>
                                <td className="text-end">
                                    <a href="#" className="text-gray-600 text-hover-primary">Eleanor Pena</a>
                                </td>
                                <td className="text-end">$290.00</td>
                                <td className="text-end">
                                    <span className="text-gray-800 fw-boldest">$29.00</span>
                                </td>
                                <td className="text-end">
                                    <span className="badge py-3 px-4 fs-7 badge-light-danger">Rejected</span>
                                </td>
                                <td className="text-end">
                                    <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary toggle h-25px w-25px" data-kt-table-widget-4="expand_row">
                                        <span className="svg-icon svg-icon-3 m-0 toggle-off">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.5" x="11" y="18" width="12" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor"></rect>
                                                <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"></rect>
                                            </svg>
                                        </span>
                                        <span className="svg-icon svg-icon-3 m-0 toggle-on">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"></rect>
                                            </svg>
                                        </span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>
                                    <a href="/metronic8/demo1/../demo1/apps/ecommerce/catalog/edit-product.html" className="text-gray-800 text-hover-primary">#SKP-567</a>
                                </td>
                                <td className="text-end">7 min ago</td>
                                <td className="text-end">
                                    <a href="#" className="text-gray-600 text-hover-primary">Dan Wilson</a>
                                </td>
                                <td className="text-end">$590.00</td>
                                <td className="text-end">
                                    <span className="text-gray-800 fw-boldest">$50.00</span>
                                </td>
                                <td className="text-end">
                                    <span className="badge py-3 px-4 fs-7 badge-light-success">Shipped</span>
                                </td>
                                <td className="text-end">
                                    <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary toggle h-25px w-25px" data-kt-table-widget-4="expand_row">
                                        <span className="svg-icon svg-icon-3 m-0 toggle-off">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.5" x="11" y="18" width="12" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor"></rect>
                                                <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"></rect>
                                            </svg>
                                        </span>
                                        <span className="svg-icon svg-icon-3 m-0 toggle-on">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"></rect>
                                            </svg>
                                        </span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Rewards;