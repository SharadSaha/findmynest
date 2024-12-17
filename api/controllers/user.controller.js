export const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await prisma.user.findUnique({ where: { id: userId } });

    res.status(200).json(user);
  } catch (err) {
    // console.log(err);
    res.status(500).json({ message: `${err.message} -- Failed to get user` });
  }
};
export const updateUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const tokenUserId = req.userId;

    if (userId !== tokenUserId)
      return res.status(403).json({ message: "Unauthorized User" });

    const { password, photo, ...payload } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        ...payload,
        ...(password && { password: encryptedPassword }),
        ...deleteUserById(photo && { photo: photo }),
      },
    });

    res.status(200).json(user);
  } catch (err) {
    // console.log(err);
    res
      .status(500)
      .json({ message: `${err.message} -- Failed to update user` });
  }
};
export const deleteUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const tokenUserId = req.userId;

    if (userId !== tokenUserId)
      return res.status(403).json({ message: "Unauthorized User" });

    await prisma.user.delete({ where: { id: userId } });

    res.status(200).json({ message: "User deleted" });
  } catch (err) {
    // console.log(err);
    res
      .status(500)
      .json({ message: `${err.message} -- Failed to delete user` });
  }
};
