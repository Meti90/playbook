function join() {
    let t_join = document.getElementById("t-join");
    let t_email = document.getElementById("t-email");
    let t_twitter = document.getElementById("t-twitter");
    let t_facebook = document.getElementById("t-facebook");
    t_join.textContent = "Join Playbook";
    t_email.textContent = "Sign up with email";
    t_twitter.textContent = "Sign up with Twitter";
    t_facebook.textContent = "Sign up with Facebook";
    let login = document.getElementById("login");
    login.style.display = "block";
    login.style.zIndex = 90;
}
function signin() {
    let t_join = document.getElementById("t-join");
    let t_email = document.getElementById("t-email");
    let t_twitter = document.getElementById("t-twitter");
    let t_facebook = document.getElementById("t-facebook");
    t_join.textContent = "Sign in";
    t_email.textContent = "Sign in with email";
    t_twitter.textContent = "Sign in with Twitter";
    t_facebook.textContent = "Sign in with Facebook";
    let login = document.getElementById("login");
    login.style.display = "block";
    login.style.zIndex = 90;

}
function closee() {
    let login = document.getElementById("login");
    login.style.display = "none";
}
function search() {
    let search = document.getElementById("search");
    let inp = document.getElementById("inp");
    inp.style.backgroundColor = "#fff"
    search.style.position = "fixed";
    search.style.marginLeft = 300;
    search.style.zIndex = 50;
    search.style.backgroundColor = "#fff";
    let search_div = document.getElementById("search_div");
    search_div.style.display = "block";
}
function close_search() {
    let search_div = document.getElementById("search_div");
    search_div.style.display = "none";
    let inp = document.getElementById("inp");
    let search = document.getElementById("search");
    inp.style.backgroundColor = "#ebebeb";
    search.style.backgroundColor = "#ebebeb";
    search.style.margin = 0;
    search.style.position = "static";
    search.style.zIndex =1;
}