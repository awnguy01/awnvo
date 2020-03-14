import { UsesInfoObject } from 'src/app/models/uses-info-object';

export const USES_DATA: UsesInfoObject[] = [
  {
    header: 'Hardware + OS',
    dataList: [
      {
        label: 'Lenovo Thinkpad X380 Yoga',
        link: 'https://www.pcmag.com/reviews/lenovo-thinkpad-x380-yoga',
        desc: 'pricey but ideal machine for everything from high-intensive computing to taking notes in class'
      },
      {
        label: 'Windows 10',
        link: 'https://www.microsoft.com/en-us/windows/get-windows-10',
        desc: 'grown up on this OS and its predecessors all my life'
      }
    ]
  },
  {
    header: 'Text/Code Editors',
    dataList: [
      {
        label: 'Notepad++',
        link: 'https://notepad-plus-plus.org/',
        desc: 'lightweight enough that I use it as my default editor for quick one-off files'
      },
      {
        label: 'VSCode',
        link: 'https://code.visualstudio.com/',
        desc: 'chock full of handy plugins that I use for nearly all coding',
        dataList: [
          {
            label: 'Night Wolf Theme',
            link: 'https://marketplace.visualstudio.com/items?itemName=MaoSantaella.night-wolf',
            desc: `spinoff of Sarah Drasner's Night Owl theme with clearer editor separators`
          },
          {
            label: 'Bracket Pair Colorizer',
            link: 'https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2',
            desc: 'a sanity-essential VSCode plugin for navigating nested brackets'
          },
          {
            label: 'Prettier',
            link: 'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode',
            desc: 'another essential VSCode plugin for human-readable code'
          },
          {
            label: 'Settings Sync',
            link: 'https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync',
            desc: `useful when I am switching between workstations and don't want to re-download every extension`
          },
          {
            label: 'TODO Highlight',
            link: 'https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight',
            desc: 'a fantastic tool I use to help me emphasize my code comments'
          },
          {
            label: 'Toggle Quotes',
            link: 'https://marketplace.visualstudio.com/items?itemName=BriteSnow.vscode-toggle-quotes',
            desc: 'a subtle but oft-used plugin for quickly switching between single, double, and backtick quotes'
          },
          {
            label: 'Code Spell Checker',
            link: 'https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker',
            desc: 'my first line of defense against unintentionally misspelling APIs'
          },
          {
            label: 'CSS Peek',
            link: 'https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek',
            desc: 'great for quickly navigating between HTML and CSS files in Angular'
          }
        ]
      }
    ]
  },
  {
    header: 'Consoles',
    dataList: [
      {
        label: 'HyperJS',
        link: 'https://hyper.is/',
        desc: 'my favorite terminal GUI to use, especially for long-running server consoles'
      },
      {
        label: 'Cmder',
        link: 'https://cmder.net/',
        desc: 'great for long-term projects where I need to view many console outputs at once on split-screen'
      }
    ]
  },
  {
    header: 'Git',
    dataList: [
      {
        label: 'GitHub',
        link: 'https://github.com/',
        desc: 'my primary cloud repo for storing projects'
      },
      {
        label: 'GitKraken',
        link: 'https://www.gitkraken.com/',
        desc: 'an amazing and robust Git GUI that trivializes most common Git commands'
      },
      {
        label: 'GitBash',
        link: 'https://git-scm.com/',
        desc: 'my life saver in a pinch when I need to execute very specific Git commands'
      }
    ]
  },
  {
    header: 'System Admin Tools',
    dataList: [
      {
        label: 'PuTTY',
        link: 'https://www.chiark.greenend.org.uk/~sgtatham/putty/',
        desc: 'essential tool to use to SSH into cloud servers from my Windows machine'
      },
      {
        label: 'CyberDuck',
        link: 'https://cyberduck.io/',
        desc: 'fantastic tool to use for SFTP uploading + bonus is that it can launch a PuTTY terminal into the server'
      }
    ]
  },
  {
    header: 'Productivity',
    dataList: [
      {
        label: 'Notion',
        link: 'https://www.notion.so/',
        desc: 'the single management tool that holds my entire life together'
      },
      {
        label: 'Google Calendar',
        link: 'https://calendar.google.com/calendar/r',
        desc: 'great for planning out my day-to-day and personal appointments'
      }
    ]
  }
];
