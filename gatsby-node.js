exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  console.log(page.path)

  if (page.path.match(/^\/another-client\/another-client-section/)){
    page.matchPath=`/another-client/*`
    createPage(page)
  }
  if (page.path.match(/^\/admin\/admin/)) {
    console.log(`admin user path:${page.path} \n`)
    page.matchPath = `/admin/*`
    createPage(page)
  }

}
