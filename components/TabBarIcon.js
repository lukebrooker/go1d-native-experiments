import { Feather } from "@expo/vector-icons";
import * as React from 'react';

import { IconHome, IconUser } from '../go1d/components/Icons'

const icons = {
  home: IconHome,
  profile: IconUser
}

export default function TabBarIcon({ name }) {
  const Icon = icons[name]
  return (
    <Icon size={5} />
  );
}
