interface IconProps {
  className?: string
}

export const NoDataIcon = ({ className = 'w-24 h-24' }: IconProps) => (
  <svg className={className} viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(0 1)" fill="none" fillRule="evenodd">
      <ellipse fill="#f5f5f5" cx="32" cy="33" rx="32" ry="7" />
      <g fillRule="nonzero">
        <path
          d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
          fill="#e6f7ff"
          stroke="#1890ff"
        />
        <path
          d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
          fill="#fff"
          stroke="#1890ff"
        />
        <path d="M25 24h14M25 28h14M25 32h14" stroke="#1890ff" strokeLinecap="round" />
      </g>
    </g>
  </svg>
)

export const NoSearchIcon = ({ className = 'w-24 h-24' }: IconProps) => (
  <svg className={className} viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <ellipse fill="#f5f5f5" cx="32" cy="33" rx="32" ry="7" />
      <g transform="translate(7 1)">
        <path
          d="M24.25 27.84c-5.19 0-9.404-4.4-9.404-9.826 0-5.426 4.215-9.826 9.404-9.826s9.403 4.4 9.403 9.826c0 5.425-4.214 9.825-9.403 9.825"
          fill="#fff"
          stroke="#1890ff"
        />
        <path
          d="M41.14 25.002l-4.122-4.34a11.85 11.85 0 002.048-6.647C39.066 6.89 31.584 1 22.25 1S5.434 6.89 5.434 14.015c0 7.124 7.482 13.014 16.816 13.014 3.71 0 7.148-1.256 9.87-3.375l4.152 4.372c.52.547 1.367.547 1.887 0l2.98-3.138c.52-.547.52-1.435 0-1.982"
          fill="#e6f7ff"
          stroke="#1890ff"
        />
        <circle cx="24.25" cy="14.015" r="6" fill="#1890ff" opacity=".2" />
        <path d="M20 14h8.5M24.25 10v8" stroke="#1890ff" strokeLinecap="round" />
      </g>
    </g>
  </svg>
)

export const NetworkErrorIcon = ({ className = 'w-24 h-24' }: IconProps) => (
  <svg className={className} viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <ellipse fill="#f5f5f5" cx="32" cy="33" rx="32" ry="7" />
      <g transform="translate(12 3)">
        <circle fill="#fff" stroke="#ff4d4f" cx="20" cy="12" r="11" />
        <path d="M20 4.5v10M20 17.5v2" stroke="#ff4d4f" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M15 7.5l10 10M25 7.5l-10 10"
          stroke="#ff4d4f"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity=".3"
        />
        <circle fill="#fff5f5" cx="20" cy="12" r="6" />
        <path
          d="M13 25c-4.97 0-9-2.686-9-6s4.03-6 9-6M27 25c4.97 0 9-2.686 9-6s-4.03-6-9-6"
          stroke="#ff4d4f"
          strokeLinecap="round"
        />
      </g>
    </g>
  </svg>
)
