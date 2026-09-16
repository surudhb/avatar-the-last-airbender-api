function handleClick(e) {
  const btn = e.currentTarget
  const expand = btn.textContent.trim() === 'Expand All'
  for (const input of document.querySelectorAll('.collapsible input[type="checkbox"]')) {
    if (expand && !input.checked) input.nextElementSibling.click()
    if (!expand && input.checked) input.nextElementSibling.click()
  }
  btn.textContent = expand ? 'Collapse All' : 'Expand All'
}
