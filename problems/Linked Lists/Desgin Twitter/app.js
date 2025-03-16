
class TweetNode {
  constructor(tweetId, time) {
    this.tweetId = tweetId;
    this.time = time;
    this.next = null;
  }
}

class Twitter {
  constructor() {
    this.time = 0;
    this.users = {};
  }

  postTweet(userId, tweetId) {
    if (!this.users[userId]) {
      this.users[userId] = {
        tweetHead: null,
        followees: new Set([userId]),
      };
    }
    const newTweet = new TweetNode(tweetId, this.time);
    this.time++;
    newTweet.next = this.users[userId].tweetHead;
    this.users[userId].tweetHead = newTweet;
  }

  getNewsFeed(userId) {
    if (!this.users[userId]) return [];
    const followees = this.users[userId].followees;
    const allTweets = [];
    for (const followeeId of followees) {
      const followee = this.users[followeeId];
      if (followee) {
        let current = followee.tweetHead;
        while (current) {
          allTweets.push(current);
          current = current.next;
        }
      }
    }
    allTweets.sort((a, b) => b.time - a.time);
    return allTweets.slice(0, 10).map(t => t.tweetId);
  }

  follow(followerId, followeeId) {
    if (!this.users[followerId]) {
      this.users[followerId] = {
        tweetHead: null,
        followees: new Set([followerId]),
      };
    }
    if (!this.users[followeeId]) {
      this.users[followeeId] = {
        tweetHead: null,
        followees: new Set([followeeId]),
      };
    }
    this.users[followerId].followees.add(followeeId);
  }

  unfollow(followerId, followeeId) {
    if (!this.users[followerId]) return;
    if (followerId === followeeId) return;
    this.users[followerId].followees.delete(followeeId);
  }
}