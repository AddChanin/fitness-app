import React from 'react';
import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface DeleteButtonProps {
  onPress: () => void;
  size?: number;
  color?: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons name="delete" color={'#ED2939'} size={24} />
    </TouchableOpacity>
  );
};

export default DeleteButton;
