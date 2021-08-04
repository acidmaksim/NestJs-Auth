export type CrmAuthTokenProps = {
  sub: string;
  profileId: string;
  type: 'user' | 'admin' | 'fake';
};

export type AccessType = 'public' | 'admin' | undefined;

export type CurrentUserProps = {
  id: string;
  profileId: string;
  roleId: string;
  type: CrmAuthTokenProps['type'];
  photo: string;
  firstName: string;
  lastName: string;
  email: string;
  access: boolean;
};
