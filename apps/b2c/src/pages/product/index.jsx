import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import productsData from "../../config/content/products.json";
import ImageGallery from "./ImageGallery";
import ProductInfo from "./ProductInfo";
import RelatedProducts from "./RelatedProducts";

export default function ProductPage() {
    const { slug } = useParams();
    const product = productsData.find((p) => p.slug === slug);

    if (!product) {
        return (
            <main
                style={{
                    minHeight: "100vh",
                    paddingTop: "calc(var(--nav-h) + var(--announce-h) + 80px)",
                    textAlign: "center",
                    background: "var(--white)",
                }}
            >
                <p
                    style={{
                        fontFamily: "var(--serif)",
                        fontSize: 80,
                        color: "var(--border)",
                    }}
                >
                    404
                </p>
                <p
                    style={{
                        fontSize: 14,
                        color: "var(--body)",
                        marginBottom: 24,
                    }}
                >
                    This masterpiece could not be found.
                </p>
                <Link to="/collections" className="link-gold">
                    Return to Showroom
                </Link>
            </main>
        );
    }

    return (
        <main
            style={{
                paddingTop: "calc(var(--nav-h) + var(--announce-h) + 40px)",
            }}
        >
            <div className="section wrap">
                {/* Breadcrumb */}
                <div
                    className="crumb"
                    style={{ marginBottom: 32, color: "var(--body)" }}
                >
                    <Link to="/" style={{ color: "var(--body)" }}>
                        Home
                    </Link>
                    <span className="sep">/</span>
                    <Link to="/collections" style={{ color: "var(--body)" }}>
                        Collections
                    </Link>
                    <span className="sep">/</span>
                    <span>{product.name}</span>
                </div>

                <div className="pdp">
                    <ImageGallery images={product.images} name={product.name} />
                    <ProductInfo product={product} />
                </div>

                <hr className="rule" style={{ margin: "64px 0 56px" }} />
                <RelatedProducts current={product} />
            </div>
        </main>
    );
}
