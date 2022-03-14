import MainNavigation from "./MainNavigation";

import classes from "./Layout.module.css"

function Layout(propts: {children: JSX.Element | JSX.Element[]}) {
  return <div>
    <MainNavigation></MainNavigation>
    <main className={classes.main}>
      {propts.children}
    </main>
  </div>
}

export default Layout;