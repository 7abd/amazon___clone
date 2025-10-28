import { JSX } from "react";

export default function SubNav(): JSX.Element {
  const navItems = [
    { label: "All", icon: '/hamburger-menu.png' },
    { label: "Today's Deals" },
    { label: "Prime Video" },
    { label: "Registry" },
    { label: "Customer Service" },
    { label: "Gift Cards" },
    { label: "Sell" },
  ];

  return (
    <nav className="bg-[#232f3e] text-white text-sm mt-15">
      <div className="flex items-center gap-6 px-4 py-2 overflow-x-auto whitespace-nowrap">
        {navItems.map((item, i) => (
          <button
            key={i}
            className="
              flex items-center gap-1 px-2 py-1 rounded-md
              hover:bg-[#37475A] transition
            "
          >
            {item.icon && <img src={item.icon} alt="hamburger menu" className="w-6" />}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
