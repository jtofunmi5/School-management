import Link from 'next/link';
import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { FaChalkboardTeacher, FaPoll, FaUserCheck } from "react-icons/fa";
import { PiStudentBold } from 'react-icons/pi';
import { RiParentFill } from 'react-icons/ri';
import { MdMessage, MdOutlineAssignmentInd, MdOutlineSubject } from 'react-icons/md';
import { SiGoogleclassroom } from 'react-icons/si';
import { BookOpen, Calendar, Calendar1, CircleUser, FileSearchCorner, LogOut, Settings } from 'lucide-react';
import { TfiAnnouncement } from 'react-icons/tfi';
import { role } from '@/lib/data';


const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <IoHomeSharp />,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FaChalkboardTeacher />,
        label: "Teachers",
        href: "/teacher",
        visible: ["admin", "teacher"],
      },
      {
        icon: <PiStudentBold />,
        label: "Student",
        href: "/student",
        visible: ["admin", "student"],
      },
      {
        icon: <RiParentFill />,
        label: "Parent",
        href: "/parent",
        visible: ["admin", "parent"],
      },
      {
        icon: <MdOutlineSubject />,
        label: "Subject",
        href: "/subject",
        visible: ["admin"],
      },
      {
        icon: <SiGoogleclassroom />,
        label: "Classes",
        href: "/class",
        visible: ["admin", "teacher"],
      },
      {
        icon: <BookOpen />,
        label: "Lessons",
        href: "/lesson",
        visible: ["admin", "teacher"],
      },
      {
        icon: <FileSearchCorner />,
        label: "Exams",
        href: "/exam",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MdOutlineAssignmentInd />,
        label: "Assignments",
        href: "/assignment",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FaPoll />,
        label: "Results",
        href: "/result",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FaUserCheck />,
        label: "Attendance",
        href: "/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <Calendar1 />,
        label: "Events",
        href: "/event",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MdMessage />,
        label: "Messages",
        href: "/message",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <TfiAnnouncement />,
        label: "Announcements",
        href: "/announcement",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <CircleUser />,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <Settings />,
        label: "Settings",
        href: "/setting",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <LogOut />,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];


const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2 mt-4"  key={i.title}>
          
          <span className="hidden lg:block text-gray-400 font-medium px-2">
            {i.title}
          </span>

        
          {i.items.map((item) => {
            if(item.visible.includes(role)) {
              return (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-1.5 md:px-2 rounded-md hover:bg-lamaSkyLight"
            >
              <span> {item.icon} </span>
              <span className="hidden m-0 lg:block ">{item.label}</span>
            </Link>
          )
            }
          })}
        </div>
      ))}
    </div>
  );
};
export default Menu;