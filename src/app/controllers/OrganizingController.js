import Meetup from '../models/Meetup';
import File from '../models/File';

class OrganizingController {
  async index(req, res) {
    const meetups = await Meetup.findAll({ where: { user_id: req.userId } });

    return res.json(meetups);
  }

  async show(req, res) {
    const meetups = await Meetup.findOne({
      where: { user_id: req.userId },
      include: [
        {
          model: File,
          as: 'cover',
          attributes: ['path', 'url'],
        },
      ],
    });

    return res.json(meetups);
  }
}

export default new OrganizingController();
