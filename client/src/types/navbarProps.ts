export type NavbarProps = {
  removeUnverified: () => void;
  removeSelected: () => void;
  blockSelected: () => void;
  unblockSelected: () => void;
  hasSelection: boolean;
};