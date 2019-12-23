const spots = {
  "stairs": {
      "description": "You're standing at the top of cool looking 7 stair that lands into a mellow curb-cut to the street like the ones in Austrailia.",
      "lookAround": "You see a concrete truck leaving a construction site to the <b>north</b> and you see some marks on a wall to the <b>west</b>.",
      "trick": {
          "notFixed": "Dude, you can't get your nollie laser with that massive crack at the top. 💔",
          "fixed": {
              "land": "You stuck your nollie laser super clean and your filmer got a dope fisheye angle. 👊",
              "fall": "You got credit carded. 💳\nOuch bro 😖"
          }
      },
      "directions": {
          "north": "ledge",
          "west": "wallride"
      },
      "examine": {
        "wax": "You see something small and bright on the sidewalk.",
        "icon": "🕯️"
      },
      "fix": {
          "item": "bondo",
          "icon": "🛹",
          "message": "Nice bondo-job! Now send it! ✉️"
      }
  },
  "ledge": {
      "description": "You roll up to a newly constructed office buiilding with a 30ft long knee-high ledge that would be perfect for the SSKFBSTS you've been wanting to get on film.",
      "lookAround": "There's another building to the the <b>west</b> with brick ground that reminmds you of a spot you've seen in a video.",
      "trick": {
          "notFixed": "The ledge is untouched and dry AF. Needs hella butter.",
          "fixed": {
            "land": "Damn you did that SSKFBSTS so sick, and the shuv out was a nice surprise. I think you might have an ender! 👊",
            "fall": "You keep adding wax, but I think you just need to go faster bro. 🚄"
          }
      },
      "directions": {
          "south": "stairs",
          "west": "bank",
      },
      "examine": {
        "bondo": "There's a pile of random construction stuff by a dumpster, and you see an unopened tub of something that could be useful.",
        "icon": "🛹",
        "message": "The spots in this city are pretty crusty, this could def come in handy. 👍"
      },
      "fix": {
          "item": "wax",
          "icon": "🕯️",
          "message": "You use almost all of the wax buttering up the ledge, let's hope it slides! 🤞"
      }
  },
  "wallride": {
      "description": "You find a sick natty qp against a wall in front of a house.",
      "lookAround": "There's a cool looking stair set to the <b>east</b>.",
      "trick": {
        "fixed": {
            "land": "Holy frik, you did a fs wallride so high that you slashed the top! 👊",
            "fall": "You hit the wall weird, which chips your nose.<br>You try to run out but you just end up scorpioning on your face. 🦂"
        }
      },
      "directions": {
          "east": "stairs",
          "north": "bank"
      },
      "examine": {
          "cash": "You see something green sticking out from under a rock. 💸",
          "icon": "💸",
          "message": "Damn, 20 bucks! It must be your lucky day. 🍀"
      },
  },
  "bank": {
      "description": "You skate up to a fancy looking bank with a sweet brick bank out front.",
      "lookAround": "There's a new office bulding to the <b>east</b> and some cool looking old houses to the <b>south</b>. ",
      "trick": {
        "notFixed": "Frick, a security guard kicks you out just as your filmer is setting white balance on the VX. 🛡️",
        "fixed": {
              "land": "Your bluntslide makes the loudest screech 🔊 and you pop a steezy tre bomb off the curb. 👊",
              "fall": "You get a flatspot trying to bluntslide the whole thing, and end up falling backwards down the bank, running into an old lady walking her dog. 👵🐩"
          }
      },
      "directions": {
          "east": "ledge",
          "south": "wallride",
      },
      "fix": {
          "item": "cash",
          "icon": "💸",
          "message": "Sweet, you offer the secutiry guard 💵 and they say you can get 3 more tries! 👍",
      }
  },

}