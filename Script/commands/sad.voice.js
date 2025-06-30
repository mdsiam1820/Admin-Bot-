const phraseAudioMap = {
  "মন খারাপ": [
    {
      url: "https://drive.google.com/uc?export=download&id=1XNfSgfvWOd50543wDlXYv9fwxIV5YzHO",
      caption: "🥺 মন খারাপ...\n\n🗣️ Pronunciation: *Mon kharap*\n😢 Feeling sad...",
    },
    {
      url: "https://drive.google.com/uc?export=download&id=1XHcAM6x7LQs32A3js6F9QBHbkUVB7JkA",
      caption: "🥺 মন খারাপ - দ্বিতীয় অডিও...\n\n🗣️ Pronunciation: *Mon kharap*\n😢 Feeling sad...",
    }
  ],
  "আমার মন ভালো নেই": [
    {
      url: "https://drive.google.com/uc?export=download&id=1XkoLVM9Qm99ClLKV_n0guweEPNclb_AA",
      caption: "💔 আমার মন ভালো নেই...\n\n🗣️ Pronunciation: *Amar mon bhalo nei*\n😞 I'm not feeling well...",
    },
    {
      url: "https://drive.google.com/uc?export=download&id=1XGVlYw_43-UhXy-zlEoKVqGFEwt5lLGh",
      caption: "💔 আমার মন ভালো নেই - দ্বিতীয় অডিও...\n\n🗣️ Pronunciation: *Amar mon bhalo nei*\n😞 Feeling unwell...",
    }
  ],
  "আমি একাকী": [
    {
      url: "https://drive.google.com/uc?export=download&id=1XUdubafBkgL_ohLWLrSQUTuksWwmft40",
      caption: "😔 আমি একাকী...\n\n🗣️ Pronunciation: *Ami ekaki*\n💭 I am lonely...",
    },
    {
      url: "https://drive.google.com/uc?export=download&id=1XfJbEwqeaDMH2g5iGAdjQ4nDl6cxANuh",
      caption: "😔 আমি একাকী - দ্বিতীয় অডিও...\n\n🗣️ Pronunciation: *Ami ekaki*\n💭 Feeling lonely...",
    }
  ],
  "বিরক্ত": [
    {
      url: "https://drive.google.com/uc?export=download&id=1XSCgOMk6CiFxBEUfoT5PavVzdTQf4wlw",
      caption: "😡 বিরক্ত...\n\n🗣️ Pronunciation: *Birakto*\n😠 Feeling annoyed...",
    },
    {
      url: "https://drive.google.com/uc?export=download&id=1X8uGRvlSKRvH1Yo8Zplcx7gjrNBkbVOx",
      caption: "😡 বিরক্ত - দ্বিতীয় অডিও...\n\n🗣️ Pronunciation: *Birakto*\n😠 Feeling annoyed...",
    }
  ],
  "ভালো লাগছে না": [
    {
      url: "https://drive.google.com/uc?export=download&id=1XLOBDL8PQpHERPJeSONIlOJVxv21wf5F",
      caption: "😐 ভালো লাগছে না...\n\n🗣️ Pronunciation: *Bhalo lagche na*\n🙁 Not feeling good...",
    },
    {
      url: "https://drive.google.com/uc?export=download&id=1XSCgOMk6CiFxBEUfoT5PavVzdTQf4wlw",
      caption: "😐 ভালো লাগছে না - দ্বিতীয় অডিও...\n\n🗣️ Pronunciation: *Bhalo lagche na*\n🙁 Feeling bad...",
    }
  ]
};

// ইউজারের জন্য প্লে করা অডিও ইন্ডেক্স ট্র্যাক করার অবজেক্ট
const userAudioIndex = {};

// অডিও প্লে করার ফাংশন
function playNextAudio(phrase) {
  const audios = phraseAudioMap[phrase];
  if (!audios) {
    console.log("এই ফ্রেজের জন্য কোনো অডিও পাওয়া যায়নি।");
    return;
  }

  let lastIndex = userAudioIndex[phrase] ?? -1;
  let nextIndex = (lastIndex + 1) % audios.length;

  const audioToPlay = audios[nextIndex];

  userAudioIndex[phrase] = nextIndex;

  // প্লে করার লজিক এখানে বসাবেন
  console.log(`Playing audio #${nextIndex + 1} for phrase "${phrase}": ${audioToPlay.url}`);
  console.log(audioToPlay.caption);

  // উদাহরণস্বরূপ, যদি ব্রাউজারে হন, তাহলে এইভাবে প্লে করতে পারেন:
  // let audio = new Audio(audioToPlay.url);
  // audio.play();
}

// Usage example:
playNextAudio("মন খারাপ");
playNextAudio("মন খারাপ");
playNextAudio("বিরক্ত");
