function Button({ displayText = "", variant = "default", onClick }) {
  const variants = {
    default: `
    bg-transparent border-border text-text
    hover:bg-highlight-background hover:border-highlight-border hover:text-highlight-text
    `,

    danger: `
    bg-transparent text-danger border-danger
    hover:text-highlight-text hover:bg-danger
    `
  }

  return (
    <button
      className={`
        font-semibold border my-auto px-4 py-2 rounded-full cursor-pointer
        transition-all duration-150
        ${variants[variant]}
      `}

      onClick={onClick}
    >{displayText}</button>
  )
}

export default Button;