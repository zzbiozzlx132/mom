export interface ChecklistItem {
  id: string;
  name: string;
  quantity: string;
  reason: string;
  link?: string;
  checked: boolean;
}

export interface ChecklistSection {
  id: string;
  title: string;
  items: ChecklistItem[];
}

export interface ChecklistData {
  title: string;
  introduction: string;
  sections: ChecklistSection[];
}