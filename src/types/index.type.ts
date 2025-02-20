export type WorkspaceProps = {
  data: {
    subscription: {
      plan: "FREE" | "PRO";
    } | null;
    workspace: {
      id: string;
      name: string;
      type: "PUBLIC" | "PERSONAL";
    }[];
    members: {
      workspace: {
        id: string;
        name: string;
        type: "PUBLIC" | "PERSONAL";
      };
    }[];
  };
};

export type NotificationProps={
  status : number
  data :{
    _count:{
      notification:number
    }
  }
}


export type FolderProps = {
  status : number
  data : {
    name : string 
    _count : {
      videos : number 
    }
  }
}

export type VideosProps = {
  status : number 
  data : {
    User : {
      firstname : string | null
      lastname : string | null 
      image : string | null 
    } | null 
    id : string 
    processing : boolean 
    Folder : {
      id : string 
      name :string 
    } | null 
    createdAt : Date
    title : string | null 
    source : string 
  } []
}

export type VideoProps = {
  status: number;
  data: {
    User: {
      firstname: string | null;
      lastname: string | null;
      image: string | null;
      clerkid: string;
      trial: boolean;
      subscription: {
        plan: 'FREE' | 'PRO';
      } | null;
    } | null;
    title: string | null;
    description: string | null;
    source: string;
    views: number;
    createdAt: Date;
    processing: boolean;
    summary: string;
  };
  author: boolean;
}