interface Task {
  id?: number;
  project_id?: number;
  comment_count?: number;
  completed?: boolean;
  content?: string;
  created?: string;
  indent?: number;
  label_ids?: number[];
  order?: number;
  priority?: number;
  url?: string;
}
