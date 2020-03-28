import Student from '../models/Student';
import generateUniqueId from '../../utils/generateUniqueId';

import connection from '../../database/sqlite/connection';

class OngController {
  async store(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = generateUniqueId();

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return response.json({ id });
  }

  async update(req, res) {
    const { userId } = req;
    const { name, email, age, weight, height } = req.body;

    const student = await Student.findByPk(req.params.id);

    await student.update({
      user_id: userId,
      name,
      email,
      age,
      weight,
      height,
    });

    return res.json(student);
  }

  async index(request, response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
  }
}

export default new OngController();
