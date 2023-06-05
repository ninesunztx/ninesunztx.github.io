
    var posts=["posts/c51b33b0.html","posts/58deec8b.html","posts/e680948.html","posts/a94d0813.html","posts/97540f25.html","posts/4ed15c0b.html"];
    function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};

    var friend_link_list=[{"name":"Hexo","hundredSuffix":"","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://anzhiy.cn/","avatar":"https://img02.anzhiy.cn/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"安知鱼","hundredSuffix":"","link":"https://anzhiy.cn/","avatar":"https://img01.anzhiy.cn/useruploads/151/2023/05/30/6475704be499a.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"安知鱼","hundredSuffix":"","link":"https://anzhiy.cn/","avatar":"https://img01.anzhiy.cn/useruploads/151/2023/05/30/6475704be499a.jpg","descr":"生活明朗，万物可爱"},{"name":"Z呵呵","hundredSuffix":"","link":"https://www.zaughter.cn/","avatar":"https://img01.anzhiy.cn/useruploads/163/2023/06/05/647db951a5ea9.jpg","descr":"喜欢摸索的小白"}];
    var refreshNum = 1
    var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
    function addFriendLinksInFooter() {
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    }
    