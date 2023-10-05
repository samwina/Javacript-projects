var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20',
            // commentReweetLikeShare :[22, 33, 44, 55],
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12',
            // commentReweetLikeShare :[23, 43, 43, 53],
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51',
            // commentReweetLikeShare :[55, 66, 77, 88],
        }
    ]
};

var user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var centerContainer = document.getElementById('center');


var twitterIcon=`
<span>
<svg viewBox="0 0 24 24" aria-label="Compte certifié" role="img" class="twitter-icon">
    <g>
        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z">
        </path>
</g>
</svg>
`;
var calendarIcon= `
<span>
<svg viewBox="0 0 24 24" aria-hidden="true" class="calendar-icon">
<g>
    <path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path>
    <circle cx="7.032" cy="8.75" r="1.285"></circle><circle cx="7.032" cy="13.156" r="1.285">
    </circle><circle cx="16.968" cy="8.75" r="1.285"></circle>
    <circle cx="16.968" cy="13.156" r="1.285"></circle><circle cx="12" cy="8.75" r="1.285">
    </circle><circle cx="12" cy="13.156" r="1.285"></circle>
    <circle cx="7.032" cy="17.486" r="1.285"></circle><
    circle cx="12" cy="17.486" r="1.285"></circle>
</g>
</svg>
`;

var backArrowIcon = `
<svg viewBox="0 0 24 24" aria-hidden="true" class="back-arrow">
<g>
    <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
</g>
</svg>
`;

var headerContainer = document.getElementById('header-container');
headerContainer.innerHTML = `
<div class="arrow-container">
   ${backArrowIcon}
</div>
<div class="header-content-container">
    <h5 class="header-display-name">${user1.displayName}
    ${twitterIcon}
    </h5>
    <h6 id='tweet-number'>${user1.tweets.length} Tweets</h6>
</div>
`;

var profilePicContainer = document.getElementById('profile-pic');
profilePicContainer.innerHTML = `
<div class="profile-pic-container">
    <img src=${user1.avatarURL} width="70px" border-radius="50%">
</div>
<div class="button-container">
    <button class="button"> Following</button>
</div>
`;

var profileDetailsContainer = document.getElementById('profile-details-container');
profileDetailsContainer.innerHTML = `
<h5 class='header-display-name'>${user1.displayName} ${twitterIcon}
</h5>
<p class='user-name'>${user1.userName}</p>
<p>
    ${calendarIcon}
    <span class="joined-date">Joinded ${user1.joinedDate}</span>
</p>
<p>
    <span class='follow-count'>${user1.followingCount}</span>
    <span class='follow'>Following</span>
    <span class='follow-count'>${user1.followerCount}</span>
    <span class='follow'>Followers</span>
</p>
`;

var commentTweets =`
<svg viewBox="0 0 24 24" aria-hidden="true" class="comment-tweets">
    <g>
        <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z">
        </path>
    </g>
</svg>
`;

var retweets= `
<svg viewBox="0 0 24 24" aria-hidden="true" class="retweets">
    <g>
        <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z">
        </path>
    </g>
</svg>
`
var likeTweets = `
<svg viewBox="0 0 24 24" aria-hidden="true" class="likes">
    <g>
        <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z">
        </path>
    </g>
</svg>
`;
var shareTweets = `
<svg viewBox="0 0 24 24" aria-hidden="true" class="share">
    <g>
        <path d="M18.466 14.928c-1.118 0-2.106.525-2.765 1.328l-6.587-3.358c.066-.27.11-.55.11-.842 0-.287-.042-.562-.106-.83l6.575-3.32c.658.81 1.65 1.34 2.774 1.34 1.978 0 3.586-1.606 3.586-3.58s-1.608-3.58-3.586-3.58-3.586 1.606-3.586 3.58c0 .314.054.614.13.904L8.463 9.876c-.656-.846-1.672-1.4-2.824-1.4-1.98 0-3.588 1.606-3.588 3.58s1.61 3.58 3.587 3.58c1.146 0 2.158-.55 2.815-1.39l6.56 3.343c-.08.294-.135.598-.135.918 0 1.974 1.608 3.58 3.586 3.58s3.586-1.606 3.586-3.58-1.61-3.58-3.586-3.58zm0-11.34c1.15 0 2.086.932 2.086 2.078s-.936 2.08-2.086 2.08-2.086-.934-2.086-2.08.935-2.08 2.086-2.08zM5.64 14.134c-1.15 0-2.088-.933-2.088-2.08s.937-2.08 2.087-2.08 2.085.935 2.085 2.08-.936 2.08-2.086 2.08zm12.826 6.452c-1.15 0-2.086-.933-2.086-2.08s.936-2.08 2.086-2.08 2.086.935 2.086 2.08-.936 2.08-2.086 2.08z">
        </path>
    </g>
</svg>
`
var tweetsContainer = document.getElementById('tweets-all-container');
for (let i=0 ; i< user1.tweets.length; i++){
    var tweetsContainerParagraph = document.createElement('div');
    tweetsContainerParagraph.classList.add('tweet-container');
    tweetsContainerParagraph.innerHTML = `
    <div class="go-shorty">
        <div class='profile-pic-at-tweet'>
            <img src=${user1.avatarURL} width="48px" border-radius="50%">
        </div>
        <div class='tweet-content'>
            <h5 class="user-info">${user1.displayName} 
            ${twitterIcon}
            <span>${user1.userName}</span>
            </h5>
            <p class="tweet-text">${user1.tweets[i].text}</p>
            <div class="feedback">
                <div class="feeedback-style">
                ${commentTweets} 
                </div>

                <div class="feeedback-style">
                ${retweets}
                </div>

                <div class="feeedback-style">
                ${likeTweets}
                </div>

                <div class="feeedback-style">
                ${shareTweets}
                </div>
            </div> 
        </div>
        
    </div>
    

    ` ;
    tweetsContainer.appendChild(tweetsContainerParagraph);
}


