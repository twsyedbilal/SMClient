import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface IMenuItem {
  type: string; // Possible values: link/dropDown/icon/separator/extLink
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
}
interface IChildItem {
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string;
  sub?: IChildItem[];
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}

@Injectable()
export class NavigationService {
  constructor() {}
  iconMenu: IMenuItem[] = [
    {
      name: "HOME",
      type: "icon",
      tooltip: "Home",
      icon: "home",
      state: "home"
    },
    {
      name: "Dashboard",
      type: "link",
      icon: "dashboard",
      state: "dashboard/data-dash"
    },
    {
      name: "Admin Profile",
      type: "link",
      icon: "perm_identity",
      state: "others/users"
    },
    {
      name: "Students Managment",
      type: "dropDown",
      icon: "format_list_bulleted",
      state: "student-managment",
      sub: [
        { 
          name: "Student Admission", 
          state: "student-Admission"
         },
         { 
          name: "Student List", 
          state: "all-Students"
         },
      
       ]
    },
  
    {
      name: "Subject",
      type: "dropDown",
      icon: "person_add",
      state:"subject",
      sub: [
        { 
          name: "Subject", 
          state: "subject"
         },
      ] 
    },
    {
      name: "Exam",
      type: "dropDown",
      icon: "person_add",
      state:"exam",
      sub: [
        { 
          name: "Exam", 
          state: "exam"
         },
      ] 
    },

    
    {
      name: "student-mark",
      type: "dropDown",
      icon: "person_add",
      state:"studentmark",
      sub: [
        { 
          name: "student-marks", 
          state: "studentmark"
         },
      ] 
    },



    {
      name: "Account",
      type: "dropDown",
      icon: "person_add",
      state:"adminis",
      sub: [
        { 
          name: "Create Fees", 
          state: "master-layout"
         },
      ]
    },
    
    {
      name: "Compliants",
      type: "dropDown",
      icon: "person_add",
      state:"compliant",
      sub: [
        { 
          name: "Compliant Types", 
          state: "type-master"
         },
         { 
          name: "Compliants", 
          state: "compliants"
         },
          { 
           name: "Compliants-List", 
           state: "compliantlist"
          },
      ]
    },
    
    {
      name: "Administration",
      type: "dropDown",
      icon: "person_add",
      state:"adminis",
      sub: [
        { 
          name: "Create  Master", 
          state: "master-layout"
         },
      ]
    },
    {
      name: "Teachers Managment",
      type: "dropDown",
      icon: "people",
      state: "teacher-managment",
      sub: [
        { 
          name: "Create User", 
          state: "create-teacher" }
      ]
    },
    {
      name: "Library Managment",
      type: "dropDown",
      icon: "view_list",
      state: "library-managment",
      sub: [
        { 
          name: "Book List", 
          state: "Books-list"
         }
      ]
    },
   
    {
      name: "DOC",
      type: "extLink",
      tooltip: "Documentation",
      icon: "library_books",
      state: "http://demos.ui-lib.com/egret-doc/"
    }
  ];

  separatorMenu: IMenuItem[] = [
    {
      type: "separator",
      name: "Custom components"
    },
     {
      name: "FORMS",
      type: "dropDown",
      tooltip: "Forms",
      icon: "description",
      state: "forms",
      sub: [
        { name: "BASIC", state: "basic" },
        { name: "EDITOR", state: "editor" },
        { name: "UPLOAD", state: "upload" },
        { name: "WIZARD", state: "wizard" }
      ]
    },
    {
      name: "TABLES",
      type: "dropDown",
      tooltip: "Tables",
      icon: "format_line_spacing",
      state: "tables",
      sub: [
        { name: "FULLSCREEN", state: "fullscreen" },
        { name: "PAGING", state: "paging" },
        { name: "FILTER", state: "filter" }
      ]
    },
    {
      name: "CHARTS",
      type: "link",
      tooltip: "Charts",
      icon: "show_chart",
      state: "charts"
    },
    {
      name: "OTHERS",
      type: "dropDown",
      tooltip: "Others",
      icon: "blur_on",
      state: "others",
      sub: [
        { name: "GALLERY", state: "gallery" },
        { name: "PRICINGS", state: "pricing" },
        { name: "USERS", state: "users" },
        { name: "BLANK", state: "blank" }
      ]
    },
    {
      name: "MATICONS",
      type: "link",
      tooltip: "Material Icons",
      icon: "store",
      state: "icons"
    },
    {
      name: "DOC",
      type: "extLink",
      tooltip: "Documentation",
      icon: "library_books",
      state: "http://demos.ui-lib.com/egret-doc/"
    }
  ];

  plainMenu: IMenuItem[] = [
    /*{
      name: "DASHBOARD",
      type: "link",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "dashboard"
    },*/
    /*{
      name: "INBOX",
      type: "link",
      tooltip: "Inbox",
      icon: "inbox",
      state: "inbox"
    },
    {
      name: "CHAT",
      type: "link",
      tooltip: "Chat",
      icon: "chat",
      state: "chat"
    },*/
   /* {
      name: "CRUD Table",
      type: "link",
      tooltip: "CRUD Table",
      icon: "format_list_bulleted",
      state: "cruds/ngx-table"
    },
    {
      name: "CALENDAR",
      type: "link",
      tooltip: "Calendar",
      icon: "date_range",
      state: "calendar"
    },
    {
      name: "DIALOGS",
      type: "dropDown",
      tooltip: "Dialogs",
      icon: "filter_none",
      state: "dialogs",
      sub: [
        { name: "CONFIRM", state: "confirm" },
        { name: "LOADER", state: "loader" }
      ]
    },
    {
      name: "MATERIAL",
      type: "dropDown",
      icon: "favorite",
      state: "component",
      sub: [
        { name: "BUTTONS", state: "buttons" },
        { name: "Button Toggle", state: "button-toggle" },
        { name: "Buttons Loading", state: "loading-buttons" },
        { name: "CARDS", state: "cards" },
        { name: "GRIDS", state: "grids" },
        { name: "LISTS", state: "lists" },
        { name: "MENU", state: "menu" },
        { name: "TABS", state: "tabs" },
        { name: "SELECT", state: "select" },
        { name: "RADIO", state: "radio" },
        { name: "AUTOCOMPLETE", state: "autocomplete" },
        { name: "SLIDER", state: "slider" },
        { name: "PROGRESS", state: "progress" },
        { name: "SNACKBAR", state: "snackbar" }
      ]
    },
    {
      name: "FORMS",
      type: "dropDown",
      tooltip: "Forms",
      icon: "description",
      state: "forms",
      sub: [
        { name: "BASIC", state: "basic" },
        { name: "EDITOR", state: "editor" },
        { name: "UPLOAD", state: "upload" },
        { name: "WIZARD", state: "wizard" }
      ]
    },
    {
      name: "TABLES",
      type: "dropDown",
      tooltip: "Tables",
      icon: "format_line_spacing",
      state: "tables",
      sub: [
        { name: "FULLSCREEN", state: "fullscreen" },
        { name: "PAGING", state: "paging" },
        { name: "FILTER", state: "filter" }
      ]
    },
    {
      name: "PROFILE",
      type: "dropDown",
      tooltip: "Profile",
      icon: "person",
      state: "profile",
      sub: [
        { name: "OVERVIEW", state: "overview" },
        { name: "SETTINGS", state: "settings" },
        { name: "BLANK", state: "blank" }
      ]
    },
    {
      name: "TOUR",
      type: "link",
      tooltip: "Tour",
      icon: "flight_takeoff",
      state: "tour"
    },
    {
      name: "MAP",
      type: "link",
      tooltip: "Map",
      icon: "add_location",
      state: "map"
    },
    {
      name: "CHARTS",
      type: "link",
      tooltip: "Charts",
      icon: "show_chart",
      state: "charts"
    },*/
   /* {
      name: "DND",
      type: "link",
      tooltip: "Drag and Drop",
      icon: "adjust",
      state: "dragndrop"
    },
    {
      name: "SESSIONS",
      type: "dropDown",
      tooltip: "Pages",
      icon: "view_carousel",
      state: "sessions",
      sub: [
        { name: "SIGNUP", state: "signup" },
        { name: "SIGNIN", state: "signin" },
        { name: "FORGOT", state: "forgot-password" },
        { name: "LOCKSCREEN", state: "lockscreen" },
        { name: "NOTFOUND", state: "404" },
        { name: "ERROR", state: "error" }
      ]
    },*/
    {
      name: "OTHERS",
      type: "dropDown",
      tooltip: "Others",
      icon: "blur_on",
      state: "others",
      sub: [
        { name: "GALLERY", state: "gallery" },
        { name: "PRICINGS", state: "pricing" },
        { name: "USERS", state: "users" },
        { name: "BLANK", state: "blank" }
      ]
    },
    {
      name: "MATICONS",
      type: "link",
      tooltip: "Material Icons",
      icon: "store",
      state: "icons"
    },
    {
      name: "DOC",
      type: "extLink",
      tooltip: "Documentation",
      icon: "library_books",
      state: "http://demos.ui-lib.com/egret-doc/"
    }
  ];

  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle: string = "Frequently Accessed";
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();

  // Customizer component uses this method to change menu.
  // You can remove this method and customizer component.
  // Or you can customize this method to supply different menu for
  // different user type.
  publishNavigationChange(menuType: string) {
    switch (menuType) {
      case "separator-menu":
        this.menuItems.next(this.separatorMenu);
        break;
      case "icon-menu":
        this.menuItems.next(this.iconMenu);
        break;
      default:
        this.menuItems.next(this.plainMenu);
    }
  }
}
