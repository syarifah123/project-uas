export default function HeaderMenuItem({ id, icon, color, badge }) {
    return (
      <div
        id={id}
        className={`relative p-3 rounded-2xl cursor-pointer ${color}`}
      >
        <span className="text-xl">{icon}</span>
        {badge && (
          <span
            id={`${id}-badge`}
            className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-full px-2 py-1 text-xs"
          >
            {badge}
          </span>
        )}
      </div>
    );
  }
  