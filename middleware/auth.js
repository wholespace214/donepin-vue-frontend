// export default function({ route, redirect }) {
//   const JWT = localStorage.getItem("JWT");
//   if (!JWT) {
//     return redirect("/login");
//   } //to make add localstorage in context 
// }

export default function({ store, redirect }) {
  // If the user is not authenticated
  if (!store) {
    return redirect("/login");
  }
}
