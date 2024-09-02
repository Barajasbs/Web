package com.example.demo.controller;

import com.example.demo.model.Conductor;
import com.example.demo.service.ConductorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/conductores")
public class ConductorController {

    @Autowired
    private ConductorService conductorService;

    @GetMapping
    public String getAllConductores(Model model) {
        model.addAttribute("conductores", conductorService.getAllConductores());
        return "conductores";
    }

    @GetMapping("/add")
    public String showAddForm(Model model) {
        model.addAttribute("conductor", new Conductor());
        return "conductor-form";
    }

    @PostMapping("/add")
    public String createConductor(@ModelAttribute("conductor") Conductor conductor) {
        conductorService.saveConductor(conductor);
        return "redirect:/conductores";
    }

    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable Long id, Model model) {
        Conductor conductor = conductorService.getConductorById(id);
        model.addAttribute("conductor", conductor);
        return "conductor-form";
    }

    @PostMapping("/edit/{id}")
    public String updateConductor(@PathVariable Long id, @ModelAttribute("conductor") Conductor conductor) {
        conductorService.updateConductor(id, conductor);
        return "redirect:/conductores";
    }

    @GetMapping("/delete/{id}")
    public String deleteConductor(@PathVariable Long id) {
        conductorService.deleteConductor(id);
        return "redirect:/conductores";
    }

    @GetMapping("/details/{id}")
    public String showConductorDetails(@PathVariable Long id, Model model) {
        Conductor conductor = conductorService.getConductorById(id);
        model.addAttribute("conductor", conductor);
        return "conductor_details";
    }
}
