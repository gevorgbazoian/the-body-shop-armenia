import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";

export default function CartDrawer({ isOpen, onClose, cartItems, onAddOne, onRemoveOne, onRemoveAll }) {
  if (!isOpen) return null;

  // Group items by ID and count quantities
  const groupedItems = cartItems.reduce((acc, item) => {
    const existing = acc.find((x) => x.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const total = groupedItems.reduce((sum, item) => sum + item.priceVal * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-[1000] overflow-hidden select-none">
      {/* Dark Overlay backdrop */}
      <div
        className="absolute inset-0 bg-brandDark/40 backdrop-blur-sm transition-opacity duration-500"
        onClick={onClose}
      />

      {/* Slide-out Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between h-full border-l border-[#1B5E20]/10">
          
          {/* Header */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-brandDark">
              <ShoppingBag size={18} className="text-forest" />
              <h2 className="text-lg font-cormorant font-bold uppercase tracking-wider">
                Shopping Basket
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-brandDark/50 hover:text-brandDark hover:bg-[#FAF9F6] rounded-full transition-colors"
              data-cursor="explore"
            >
              <X size={18} />
            </button>
          </div>

          {/* Cart items list */}
          <div className="flex-grow overflow-y-auto p-6 space-y-6">
            {groupedItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <ShoppingBag size={36} className="text-brandDark/25" />
                <p className="text-sm font-inter text-brandDark/50">
                  Your basket is empty.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2 border border-forest text-forest hover:bg-forest hover:text-white rounded-full text-[10px] font-inter font-bold tracking-widest uppercase transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              groupedItems.map((item) => (
                <div key={item.id} className="flex space-x-4 pb-6 border-b border-gray-100 items-start">
                  {/* Image */}
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border border-gray-100 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Info */}
                  <div className="flex-grow space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-cormorant font-bold text-brandDark leading-tight line-clamp-2 pr-2">
                        {item.name}
                      </h3>
                      <button
                        onClick={() => onRemoveAll(item)}
                        className="text-brandDark/40 hover:text-red-600 transition-colors focus:outline-none"
                        title="Remove item"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>

                    <p className="text-xs font-bold text-forest">{item.price}</p>

                    {/* Quantity controls */}
                    <div className="flex items-center space-x-4 pt-1">
                      <div className="flex items-center border border-gray-200 rounded-full py-1 px-3 space-x-3 bg-[#FAF9F6]">
                        <button
                          onClick={() => onRemoveOne(item)}
                          className="text-brandDark/40 hover:text-forest text-xs font-semibold focus:outline-none"
                        >
                          <Minus size={10} />
                        </button>
                        <span className="text-[11px] font-inter font-bold text-brandDark">{item.quantity}</span>
                        <button
                          onClick={() => onAddOne(item)}
                          className="text-brandDark/40 hover:text-forest text-xs font-semibold focus:outline-none"
                        >
                          <Plus size={10} />
                        </button>
                      </div>
                      <span className="text-[10px] font-inter text-brandDark/40">
                        Sub: {(item.priceVal * item.quantity).toLocaleString()} ֏
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer controls & Subtotal */}
          {groupedItems.length > 0 && (
            <div className="p-6 border-t border-gray-100 bg-[#FAF9F6] space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-inter font-bold text-brandDark/60 uppercase tracking-widest">
                  Subtotal
                </span>
                <span className="text-2xl font-cormorant font-extrabold text-[#0B260E]">
                  {total.toLocaleString()} ֏
                </span>
              </div>

              <p className="text-[9px] font-inter text-brandDark/40 leading-normal">
                Shipping is calculated at checkout. Armenian local boutique collection available.
              </p>

              <button
                onClick={() => alert("Checkout demo completed! Thank you for choosing The Body Shop.")}
                className="w-full py-4 bg-forest hover:bg-brandDark text-white text-[10px] font-inter font-bold tracking-[0.2em] uppercase rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Proceed to Checkout
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
