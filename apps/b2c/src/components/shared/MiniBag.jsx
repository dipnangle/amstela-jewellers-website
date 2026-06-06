import { useShop } from "../../context/ShopContext";
import { X, ShoppingBag, Plus, Minus, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MiniBag() {
    const {
        cart,
        cartOpen,
        setCartOpen,
        updateQty,
        removeFromCart,
        cartTotal,
        cartCount,
    } = useShop();
    const navigate = useNavigate();

    return (
        <>
            <div
                className={`drawer-scrim ${cartOpen ? "open" : ""}`}
                onClick={() => setCartOpen(false)}
                aria-hidden="true"
            />

            <aside className={`drawer ${cartOpen ? "open" : ""}`}>
                <div
                    className="drawer-content-wrapper"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        opacity: cartOpen ? 1 : 0,
                        transform: cartOpen ? "none" : "translateX(20px)",
                        transition:
                            "all .7s cubic-bezier(0.19, 1, 0.22, 1) .1s",
                    }}
                >
                    <div className="drawer-top">
                        <div
                            style={{
                                display: "flex",
                                alignItems: "baseline",
                                gap: 10,
                            }}
                        >
                            <h3
                                style={{
                                    margin: 0,
                                    fontFamily: "var(--serif)",
                                    fontSize: 24,
                                }}
                            >
                                Your Bag
                            </h3>
                            <span
                                style={{
                                    fontSize: 13,
                                    color: "var(--gold)",
                                    fontWeight: 600,
                                }}
                            >
                                ({cartCount})
                            </span>
                        </div>
                        <button
                            className="drawer-close"
                            onClick={() => setCartOpen(false)}
                        >
                            <X size={22} strokeWidth={1.5} />
                        </button>
                    </div>

                    <div
                        className="drawer-nav"
                        style={{ padding: 0, overflowY: "auto", flex: 1 }}
                    >
                        {cart.length === 0 ? (
                            <div
                                className={`cart-empty-state reveal ${cartOpen ? "in" : ""}`}
                                style={{
                                    padding: "80px 40px",
                                    textAlign: "center",
                                    transitionDelay: "200ms",
                                }}
                            >
                                <div
                                    style={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: "50%",
                                        background: "var(--offwhite)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: "0 auto 24px",
                                    }}
                                >
                                    <ShoppingBag
                                        size={32}
                                        strokeWidth={1}
                                        color="var(--border)"
                                    />
                                </div>
                                <h4
                                    style={{
                                        fontFamily: "var(--serif)",
                                        fontSize: 20,
                                        marginBottom: 12,
                                    }}
                                >
                                    Your bag is empty
                                </h4>
                                <p
                                    style={{
                                        fontSize: 14,
                                        color: "var(--body)",
                                        opacity: 0.7,
                                        marginBottom: 32,
                                        lineHeight: 1.6,
                                    }}
                                >
                                    It looks like you haven't explored our
                                    masterpieces yet. Discover pieces made to be
                                    treasured forever.
                                </p>
                                <button
                                    className="btn btn-navy btn-block"
                                    onClick={() => {
                                        setCartOpen(false);
                                        navigate("/collections");
                                    }}
                                >
                                    Start Exploring{" "}
                                    <ArrowRight
                                        size={16}
                                        style={{ marginLeft: 8 }}
                                    />
                                </button>
                            </div>
                        ) : (
                            <div
                                className="cart-items"
                                style={{ padding: "0 20px" }}
                            >
                                {cart.map((item, i) => (
                                    <div
                                        key={item.id}
                                        className={`cart-item reveal ${cartOpen ? "in" : ""}`}
                                        style={{
                                            display: "flex",
                                            gap: 15,
                                            padding: "20px 0",
                                            borderBottom:
                                                "1px solid var(--border)",
                                            transitionDelay: `${150 + i * 60}ms`,
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 80,
                                                height: 80,
                                                background: "var(--offwhite)",
                                                borderRadius: 4,
                                                overflow: "hidden",
                                            }}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <h5
                                                style={{
                                                    margin: "0 0 4px",
                                                    fontSize: 15,
                                                    fontFamily: "var(--serif)",
                                                }}
                                            >
                                                {item.name}
                                            </h5>
                                            <p
                                                style={{
                                                    margin: 0,
                                                    fontSize: 12,
                                                    color: "var(--body)",
                                                    opacity: 0.6,
                                                }}
                                            >
                                                {item.metal}
                                            </p>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 15,
                                                    marginTop: 12,
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        border: "1px solid var(--border)",
                                                        borderRadius: 4,
                                                    }}
                                                >
                                                    <button
                                                        onClick={() =>
                                                            updateQty(
                                                                item.id,
                                                                -1,
                                                            )
                                                        }
                                                        style={{
                                                            padding: "4px 8px",
                                                        }}
                                                    >
                                                        <Minus size={12} />
                                                    </button>
                                                    <span
                                                        style={{
                                                            fontSize: 13,
                                                            width: 24,
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        {item.qty}
                                                    </span>
                                                    <button
                                                        onClick={() =>
                                                            updateQty(
                                                                item.id,
                                                                1,
                                                            )
                                                        }
                                                        style={{
                                                            padding: "4px 8px",
                                                        }}
                                                    >
                                                        <Plus size={12} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ textAlign: "right" }}>
                                            <p
                                                style={{
                                                    margin: "0 0 10px",
                                                    fontSize: 14,
                                                    fontWeight: 600,
                                                }}
                                            >
                                                ₹
                                                {(
                                                    item.price * item.qty
                                                ).toLocaleString()}
                                            </p>
                                            <button
                                                onClick={() =>
                                                    removeFromCart(item.id)
                                                }
                                                style={{
                                                    fontSize: 11,
                                                    color: "var(--gold)",
                                                    fontWeight: 600,
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.05em",
                                                }}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {cart.length > 0 && (
                        <div
                            className={`drawer-foot reveal ${cartOpen ? "in" : ""}`}
                            style={{
                                padding: 25,
                                background: "var(--offwhite)",
                                borderTop: "1px solid var(--border)",
                                transitionDelay: "400ms",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginBottom: 10,
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: 14,
                                        color: "var(--body)",
                                    }}
                                >
                                    Subtotal
                                </span>
                                <span style={{ fontSize: 16, fontWeight: 600 }}>
                                    ₹{cartTotal.toLocaleString()}
                                </span>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginBottom: 20,
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: 14,
                                        color: "var(--body)",
                                    }}
                                >
                                    Shipping
                                </span>
                                <span
                                    style={{
                                        fontSize: 12,
                                        color: "var(--gold)",
                                        fontWeight: 600,
                                    }}
                                >
                                    Complimentary, Insured
                                </span>
                            </div>
                            <button
                                className="btn btn-gold btn-block btn-lg"
                                style={{ marginBottom: 12 }}
                            >
                                Secure Checkout
                            </button>
                            <p
                                style={{
                                    textAlign: "center",
                                    margin: 0,
                                    fontSize: 11,
                                    color: "var(--body)",
                                    opacity: 0.5,
                                }}
                            >
                                All shipments are fully insured by Amstela
                            </p>
                        </div>
                    )}
                </div>
            </aside>
        </>
    );
}
