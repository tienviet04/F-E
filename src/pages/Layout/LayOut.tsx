import { Outlet, useLocation } from "react-router-dom";
import { BreadcrumbItem } from "../../types/movies";
import { BreadCumbs } from "../../components/breadcrumb/breadcrumb";
import { Header } from "../../components/header/header";
import Footer from "../../components/footer/footer";

export default function LayOut() {
    const location = useLocation();

    const breadcrumbItems: BreadcrumbItem[] = [
        { label: 'Home', path: '/' },
        { label: 'Movies', path: '/movies' },

    ];
    return (
        <div className="bg-black">
            <Header />
            <div className="max-w-screen-xl mx-auto">
                {location.pathname !== '/' && <BreadCumbs items={breadcrumbItems} />}
                <Outlet></Outlet >
            </div>
            <Footer />
        </div>
    )
}