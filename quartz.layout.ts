import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      folderClickBehavior: "link", // what happens when you click a folder ("link" to navigate to folder page on click or "collapse" to collapse folder on click)
      folderDefaultState: "open", // default state of folders ("collapsed" or "open")
      useSavedState: true,
      sortFn: (a, b) => {
          // First try to sort by weight if available
          const weightA = a.data?.weight !== undefined ? a.data.weight : Infinity;
          const weightB = b.data?.weight !== undefined ? b.data.weight : Infinity;
          
          if (weightA !== weightB) {
            // Sort by weight (lower weight comes first)
            return weightA - weightB;
          }
          
          // Fall back to alphabetical sorting if weights are equal or not present
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          });
      }
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      folderClickBehavior: "link", // what happens when you click a folder ("link" to navigate to folder page on click or "collapse" to collapse folder on click)
      folderDefaultState: "open", // default state of folders ("collapsed" or "open")
      useSavedState: true,
      sortFn: (a, b) => {
          // First try to sort by weight if available
          const weightA = a.data?.weight !== undefined ? a.data.weight : Infinity;
          const weightB = b.data?.weight !== undefined ? b.data.weight : Infinity;
          
          if (weightA !== weightB) {
            // Sort by weight (lower weight comes first)
            return weightA - weightB;
          }
          
          // Fall back to alphabetical sorting if weights are equal or not present
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          });
      }
    }),
  ],
  right: [],
}
